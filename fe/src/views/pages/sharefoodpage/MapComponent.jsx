import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { useTranslation } from 'react-i18next';
import 'leaflet/dist/leaflet.css';

function MapComponent({ position, onLocationSelect }) {
  const { t } = useTranslation();

  function LocationMarker() {
    useMapEvents({
      click(e) {
        console.log('Map clicked:', e.latlng);
        onLocationSelect(e.latlng);
      },
    });

    return position ? <Marker position={position} /> : null;
  }

  return (
    <MapContainer
      center={[21.028511, 105.804817]} // HN City coordinates
      zoom={13}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">${t('openstreetmap_contributors')}</a>`}
      />
      <LocationMarker />
    </MapContainer>
  );
}

export default MapComponent;
