import React, { useEffect, useState } from "react";
import {
  MapContainer,
  CircleMarker,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import polyline from "polyline";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const GoogleMap = () => {
  const defaultCenter = [5.1281, 7.8721]; // Set a default center for the map

  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState(null);

  const DefaultIcon = Leaflet.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: icon,
    shadowUrl: iconShadow,
  });
  Leaflet.Marker.prototype.options.icon = DefaultIcon;

  useEffect(() => {
    console.log("collect user location");
    // Get the user's current location
    navigator.geolocation.watchPosition(
      (position) => {
        console.log(position);
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  useEffect(() => {
    // If we have user's location, calculate the directions
    if (userLocation) {
      // Use OSRM routing service to calculate the route
      const url = `https://router.project-osrm.org/route/v1/driving/${userLocation[1]},${userLocation[0]};${defaultCenter[1]},${defaultCenter[0]}?overview=full&geometries=geojson`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // Extract the route geometry from the response
          const routeGeometry = data.routes[0].geometry;
          setDirections(routeGeometry);
        })
        .catch((error) => {
          console.error("Error fetching directions:", error);
        });
    }
  }, [userLocation]);

  return (
    <MapContainer center={defaultCenter} zoom={9} style={{ height: "500px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Show user's location marker if available */}
      {userLocation && <Marker position={userLocation} />}

      {/* Show default location marker */}
      <Marker position={defaultCenter}>
        <Popup>COC Anua Obio</Popup>
      </Marker>

      {/* Show user's location to default location directions */}
      {directions && (
        <Polyline
          positions={polyline
            .decode(directions)
            .map(([lat, lng]) => [lat, lng])}
        />
      )}
    </MapContainer>
  );
};

export default GoogleMap;
