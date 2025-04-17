// src/components/search/ProviderMap.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet'; // Import L for custom icons if needed later
import { Provider } from './ProviderCard'; // Import the Provider type

// Optional: Fix for default icon issue with webpack/vite
// import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
// import markerIcon from 'leaflet/dist/images/marker-icon.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });
// --- End Optional Fix ---

interface ProviderMapProps {
  providers: Provider[];
  // Add center/zoom props if needed later
}

// Component to automatically adjust map bounds
const ChangeView: React.FC<{ center: L.LatLngExpression; zoom: number; providers: Provider[] }> = ({ center, zoom, providers }) => {
    const map = useMap();
    // Only change view if providers list actually changes
    React.useEffect(() => {
        if (providers.length > 0) {
            const bounds = L.latLngBounds(providers.map(p => [p.lat, p.lng]));
            map.fitBounds(bounds, { padding: [50, 50] }); // Add padding
        } else {
            // Optional: Reset to default view if no providers
            map.setView(center, zoom);
        }
    }, [providers, map, center, zoom]); // Depend on providers array
    return null;
}


const ProviderMap: React.FC<ProviderMapProps> = ({ providers }) => {
  // Default center (e.g., roughly center of mock data)
  const defaultCenter: L.LatLngExpression = [39.15, -77.15];
  const defaultZoom = 11;

  return (
    <MapContainer center={defaultCenter} zoom={defaultZoom} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Component to adjust view based on markers */}
      <ChangeView center={defaultCenter} zoom={defaultZoom} providers={providers} />

      {/* Map over the providers to create markers */}
      {providers.map(provider => (
        <Marker key={provider.id} position={[provider.lat, provider.lng]}>
          <Popup>
            <div className="text-sm">
              <strong className="text-blue-600">{provider.name}</strong><br />
              {provider.specialty}<br />
              {provider.address}
              {/* Add link to profile later */}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ProviderMap;