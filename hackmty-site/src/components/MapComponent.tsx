import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Box, Typography } from '@mui/material';
import { useRef, useEffect } from 'react';
import L from 'leaflet';
import RoomIcon from '@mui/icons-material/Room';
import ReactDOMServer from 'react-dom/server';


const createMarkerIcon = (color: string = 'red', size: number = 40) => {
    const html = ReactDOMServer.renderToString(
        <RoomIcon sx={{ fontSize: size }} style={{ fill: color }} />
    );
    return L.divIcon({
      className: '', // Prevent Leaflet default styling
      html: html,
      iconSize: [size, size],
      iconAnchor: [size / 2, size], // Center the icon bottom
      popupAnchor: [0, (-size+5)]
    });
}
    
type MarkerData = {
    position: [number, number];
    color: string
    popupText?: string;
  };

const LockCenterOnResize = ({ center, zoom }: { center: [number, number], zoom:number}) => {
    const map = useMap();
  
    useEffect(() => {
      const handleResize = () => {
        map.setView(center, zoom); // Re-center manually
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [map, center]);
  
    return null;
  };

const MapComponent = ({ position, zoom=100, markers = []}: { position: [number, number], zoom?:number, markers?: MarkerData[]}) => {
    const openGoogleMaps = (lat: number, lng: number) => {
        const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
        window.open(googleMapsUrl, '_blank');
    };
    
  return (
    <Box sx={{ height: '100%', width: '100%'}}>
      <Box sx={{ height: '100%', width: '100%', aspectRatio:1.5, borderRadius:'clamp(6px, 5vw + 2rem, 15px)', overflow:'hidden', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'}} display={'block'}>
        <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%'}} boxZoom={false}>
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          
          {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={createMarkerIcon(marker.color, 40)}>
              {marker.popupText && <Popup>{marker.popupText}</Popup>}
          </Marker>
          ))}
          <LockCenterOnResize center={position} zoom={zoom}></LockCenterOnResize>
        </MapContainer>
      </Box>
        <Typography
        sx={{ marginTop: 1, cursor: 'pointer', textAlign: 'center', color: 'white' }}
        onClick={() => openGoogleMaps(position[0], position[1])}
        fontSize={'clamp(0.1rem, 1vw + 0.5rem, 2rem)'}
      >
        Open in Google Maps
      </Typography>
     </Box>
  );
};

export default MapComponent;

