
import React, { useEffect, useRef } from 'react';

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize the map
    const initMap = async () => {
      if (!mapRef.current) return;

      // Load the Leaflet CSS and script dynamically
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css';
      document.head.appendChild(link);

      // We use a dynamic import for leaflet to avoid SSR issues
      const L = await import('leaflet').then(module => module.default);
      
      // Create a map instance
      const map = L.map(mapRef.current).setView([34.052235, -118.243683], 15);

      // Add the tile layer (OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Add a marker for the studio location
      L.marker([34.052235, -118.243683])
        .addTo(map)
        .bindPopup('Raj Studio')
        .openPopup();

      // Clean up function
      return () => {
        map.remove();
      };
    };

    initMap();
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="h-full w-full min-h-[300px] rounded-lg overflow-hidden border border-studio-muted"
    />
  );
};

export default Map;
