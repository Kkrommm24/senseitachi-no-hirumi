import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';  
import 'leaflet/dist/leaflet.css';  

function MapComponent({ position, onLocationSelect }) {  
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
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'  
      />  
      <LocationMarker />  
    </MapContainer>  
  );  
}

export default MapComponent;