import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({ data }) => {
  if (!data) return;
  console.log(data);

  return (
    <MapContainer
      style={{ height: "100vh", width: "100wh" }}
      center={[data[0].latitude / 100000, data[0].longitude / 100000]}
      zoom={10}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map((l, index) => (
        <Marker
          key={index}
          position={[l.latitude / 100000, l.longitude / 100000]}
        >
          <Popup>{l.anzahl}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
