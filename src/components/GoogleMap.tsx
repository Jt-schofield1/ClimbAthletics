'use client';

import { useEffect, useRef, useState } from 'react';
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
  center = { lat: 38.907192, lng: -77.036871 }, // Washington, DC
  zoom = 12,
  markers = []
}: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        const loader = new Loader({
          apiKey: 'AIzaSyDjHOuS1081QzKQJ00AwsrQALeNUxhcciE',
          version: 'weekly',
          libraries: ['places']
        });

        const { Map } = await loader.importLibrary('maps');
        const { AdvancedMarkerElement } = await loader.importLibrary('marker');

        if (mapRef.current) {
          // Create the map
          const map = new Map(mapRef.current, {
            center,
            zoom,
            mapId: 'CLIMB_ATHLETICS_MAP',
            styles: [
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#E63946' }]
              },
              {
                featureType: 'poi.business',
                stylers: [{ visibility: 'on' }]
              },
              {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#1F1F1F' }]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#E63946' }]
              }
            ]
          });

          // Add default marker for Washington, DC
          new AdvancedMarkerElement({
            map,
            position: center,
            title: 'C.L.I.M.B. Athletics - Washington, DC'
          });

          // Import InfoWindow library once for all markers
          const { InfoWindow } = await loader.importLibrary('maps');

          // Add custom markers if provided
          markers.forEach((marker) => {
            const mapMarker = new AdvancedMarkerElement({
              map,
              position: marker.position,
              title: marker.title || 'C.L.I.M.B. Athletics Location'
            });

            // Add info window if info is provided
            if (marker.info) {
              const infoWindow = new InfoWindow({
                content: `
                  <div style="padding: 10px; font-family: 'Open Sans', sans-serif;">
                    <h3 style="color: #E63946; margin: 0 0 8px 0; font-weight: 600;">${marker.title || 'C.L.I.M.B. Athletics'}</h3>
                    <p style="margin: 0; color: #1F1F1F;">${marker.info}</p>
                  </div>
                `
              });

              mapMarker.addListener('click', () => {
                infoWindow.open(map, mapMarker);
              });
            }
          });

          setIsLoaded(true);
        }
      } catch (err) {
        console.error('Error loading Google Maps:', err);
        setError('Failed to load map. Please try again later.');
      }
    };

    initMap();
  }, [center, zoom, markers]);

  if (error) {
    return (
      <div className={`bg-gray-100 rounded-xl flex items-center justify-center h-96 ${className}`}>
        <div className="text-center">
          <div className="text-red-500 text-xl mb-2">⚠️</div>
          <p className="text-gray-600">{error}</p>
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
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      )}
    </div>
  );
}