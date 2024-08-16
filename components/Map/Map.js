"use client"

import { useEffect, useState } from "react";
import { MapContainer, TileLayer,Marker,Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import locationIcon from '@/public/locationIcon.png'

const customIcon = new L.Icon({
  iconUrl: locationIcon.src, 
  iconSize: [24, 40],
  iconAnchor: [17, 35],
});

const markers = [
  { position: [28.6139, 77.209], label: "New Delhi" },
  { position: [19.076, 72.8777], label: "Mumbai" },
  { position: [13.0827, 80.2707], label: "Chennai" },
  { position: [22.5726, 88.3639], label: "Kolkata" },
  { position: [12.9716, 77.5946], label: "Bangalore" },
];


const Map = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <MapContainer
      center={[21.1458,79.0882]}
      zoom={5}
      style={{ height: "100vh", width: "100%" }}
      scrollWheelZoom={true}
      
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
       {markers.map((marker,index) =>(
         <Marker key={index} position={marker.position} icon={customIcon}>
         <Popup>
           <span>{marker.label}</span>
         </Popup>
       </Marker>
       ))}
    </MapContainer>
  );
};

export default Map;
