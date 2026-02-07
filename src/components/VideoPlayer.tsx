'use client';

import { useState, useRef } from 'react';
import { PlayIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
}

export default function VideoPlayer({ src, poster, title, className = '' }: VideoPlayerProps) {
  const [showLightbox, setShowLightbox] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setShowLightbox(true);
  };

  const handleClose = () => {
    setShowLightbox(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <>
      {/* Video Thumbnail — lightweight placeholder, no <video> preload */}
      <div
        className={`relative overflow-hidden rounded-lg cursor-pointer group touch-manipulation hover:shadow-lg transition-shadow duration-300 ${className}`}
        onClick={handlePlay}
      >
        <div className="aspect-video bg-gray-900 relative flex items-center justify-center">
          {poster ? (
            <img
              src={poster}
              alt={title || 'Video thumbnail'}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            /* Static placeholder instead of loading the actual video for metadata */
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2">
                  <PlayIcon className="w-6 h-6 text-primary" />
                </div>
                {title && (
                  <p className="text-white/60 text-xs font-medium">{title}</p>
                )}
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <div className="bg-primary/90 rounded-full p-4 text-white group-hover:scale-110 transition-transform duration-300">
              <PlayIcon className="w-8 h-8 ml-1" />
            </div>
          </div>
        </div>
        {title && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-white font-medium text-sm">{title}</h3>
          </div>
        )}
      </div>

      {/* Lightbox Modal — only loads video when opened */}
      {showLightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors duration-300 z-10"
              aria-label="Close video"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full object-contain cursor-pointer"
                controls
                autoPlay
                playsInline
              >
                <source src={src} type="video/quicktime" />
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {title && (
              <div className="mt-4 text-center">
                <h3 className="text-white text-lg font-heading font-medium">{title}</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
