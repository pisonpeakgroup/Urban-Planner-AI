// src/components/MapOverlay.jsx
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapOverlay() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '300px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
    </MapContainer>
  );
}
