'use client';

interface MapProps {
  className?: string;
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  markers?: Array<{
    position: { lat: number; lng: number };
    title?: string;
    info?: string;
  }>;
}

export default function GoogleMap({
  className = '',
  center = { lat: 38.907192, lng: -77.036871 },
}: MapProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg" style={{ minHeight: '400px' }}>
        <iframe
          title="C.L.I.M.B. Athletics Location - Washington, DC"
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${center.lng - 0.06}%2C${center.lat - 0.04}%2C${center.lng + 0.06}%2C${center.lat + 0.04}&layer=mapnik&marker=${center.lat}%2C${center.lng}`}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      {/* Link to full map */}
      <div className="mt-3 text-center">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${center.lat},${center.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-dark font-medium transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}
