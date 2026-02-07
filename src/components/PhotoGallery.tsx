'use client';

import { useState, useCallback } from 'react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface Photo {
  src: string;
  alt: string;
  title?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  className?: string;
  columns?: number;
  initialCount?: number;
}

const LOAD_MORE_COUNT = 12;

export default function PhotoGallery({ photos, className = '', columns = 3, initialCount = 12 }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const visiblePhotos = photos.slice(0, visibleCount);
  const hasMore = visibleCount < photos.length;

  const openLightbox = useCallback((index: number) => {
    setSelectedPhoto(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  const goToPrevious = useCallback(() => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(selectedPhoto > 0 ? selectedPhoto - 1 : photos.length - 1);
    }
  }, [selectedPhoto, photos.length]);

  const goToNext = useCallback(() => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(selectedPhoto < photos.length - 1 ? selectedPhoto + 1 : 0);
    }
  }, [selectedPhoto, photos.length]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  }, [closeLightbox, goToPrevious, goToNext]);

  const getGridColumns = () => {
    switch (columns) {
      case 2:
        return 'grid-cols-1 sm:grid-cols-2';
      case 4:
        return 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4';
      default:
        return 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-3';
    }
  };

  return (
    <>
      {/* Photo Grid */}
      <div className={`grid ${getGridColumns()} gap-3 sm:gap-4 ${className}`}>
        {visiblePhotos.map((photo, index) => (
          <div
            key={photo.src}
            className="relative overflow-hidden rounded-lg cursor-pointer group touch-manipulation hover:shadow-lg transition-shadow duration-300"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-square relative">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ objectPosition: 'center 65%' }}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            {photo.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{photo.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="text-center mt-8">
          <button
            onClick={() => setVisibleCount((c) => Math.min(c + LOAD_MORE_COUNT, photos.length))}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300"
          >
            Load More Photos ({photos.length - visibleCount} remaining)
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl max-h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors duration-300 z-10"
              aria-label="Close gallery"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors duration-300 z-10 bg-black/50 rounded-full p-2"
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors duration-300 z-10 bg-black/50 rounded-full p-2"
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].alt}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
                priority
              />
            </div>

            {/* Image Info */}
            {photos[selectedPhoto].title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-lg font-heading font-medium text-center">
                  {photos[selectedPhoto].title}
                </h3>
                <p className="text-gray-300 text-sm text-center mt-1">
                  {selectedPhoto + 1} of {photos.length}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
