'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface GoogleMapProps {
  className?: string;
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  markers?: Array<{
    position: {
      lat: number;
      lng: number;
    };
    title?: string;
    info?: string;
  }>;
}

export default function GoogleMap({
  className = '',
  center = { lat: 38.907192, lng: -77.036871 },
  zoom = 12,
  markers = [],
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Memoize to prevent infinite re-renders from object/array deps
  const centerKey = `${center.lat},${center.lng}`;
  const markersKey = useMemo(() => JSON.stringify(markers), [markers]);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      setError('Google Maps API key not configured.');
      return;
    }

    const initMap = async () => {
      try {
        const loader = new Loader({
          apiKey,
          version: 'weekly',
          libraries: ['places'],
        });

        const { Map } = await loader.importLibrary('maps');
        const { AdvancedMarkerElement } = await loader.importLibrary('marker');

        if (!mapRef.current) return;

        const map = new Map(mapRef.current, {
          center,
          zoom,
          mapId: 'CLIMB_ATHLETICS_MAP',
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#E63946' }],
            },
            {
              featureType: 'poi.business',
              stylers: [{ visibility: 'on' }],
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#1F1F1F' }],
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{ color: '#E63946' }],
            },
          ],
        });

        // Default marker
        new AdvancedMarkerElement({
          map,
          position: center,
          title: 'C.L.I.M.B. Athletics - Washington, DC',
        });

        // Parse markers from stable key
        const parsedMarkers = JSON.parse(markersKey);
        if (parsedMarkers.length > 0) {
          const { InfoWindow } = await loader.importLibrary('maps');

          parsedMarkers.forEach((marker: { position: { lat: number; lng: number }; title?: string; info?: string }) => {
            const mapMarker = new AdvancedMarkerElement({
              map,
              position: marker.position,
              title: marker.title || 'C.L.I.M.B. Athletics Location',
            });

            if (marker.info) {
              const infoWindow = new InfoWindow({
                content: `
                  <div style="padding: 10px; font-family: 'Open Sans', sans-serif;">
                    <h3 style="color: #E63946; margin: 0 0 8px 0; font-weight: 600;">${marker.title || 'C.L.I.M.B. Athletics'}</h3>
                    <p style="margin: 0; color: #1F1F1F;">${marker.info}</p>
                  </div>
                `,
              });

              mapMarker.addListener('click', () => {
                infoWindow.open(map, mapMarker);
              });
            }
          });
        }

        setIsLoaded(true);
      } catch (err) {
        console.error('Error loading Google Maps:', err);
        setError('Failed to load map. Please try again later.');
      }
    };

    initMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [centerKey, zoom, markersKey]);

  if (error) {
    return (
      <div className={`bg-gray-100 rounded-xl flex items-center justify-center h-96 ${className}`}>
        <div className="text-center px-6">
          <div className="bg-red-50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.27 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <p className="text-gray-500 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div
        ref={mapRef}
        className="w-full h-96 rounded-xl overflow-hidden shadow-lg"
        style={{ minHeight: '400px' }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-3" />
            <p className="text-gray-400 text-sm">Loading map...</p>
          </div>
        </div>
      )}
    </div>
  );
}
