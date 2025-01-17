import React, { useState, useEffect } from "react";
// import { createRoot } from "react-dom/client"; ???
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
//lat 31.244943918426124
//lan 34.86039439480917
import "./map.css";
import marker from "../../assets/photos/marker.png";

export default function Maps({ lat = 32.0545496, lng = 34.7811278 }) {
   const [currentLocation, setCurrentLocation] = useState({});
   console.log(currentLocation);

  //  useEffect(() => {
  //     Relocation();
  //  }, []);

   function Relocation() {
      console.log(navigator.geolocation.getCurrentPosition(abc));
      function abc(a) {
         console.log(a.coords);
         setCurrentLocation({
            lat: a?.coords.latitude || 30,
            lng: a?.coords.longitude || 30,
         });
      }
   }

   return (
      <div className="map-box">
         <button onClick={Relocation} className="map-select-btn">
            re
         </button>
         <APIProvider apiKey={"AIzaSyA_01vV-UG-8kyxW5K-IntxTPOHQURDsME"}>
            <Map
               style={{ width: "100%", height: "100%" }}
               defaultCenter={{
                  lat,
                  lng,
               }}
               defaultZoom={10}
               gestureHandling={"greedy"}
               disableDefaultUI={true}
               mapTypeId={"roadmap"}
               onClick={(e) => {
                  setCurrentLocation(e.detail.latLng);
                  console.log(e);
               }}
            >
               <Marker
                  className="marker-icon"
                  position={{
                     lng: currentLocation?.lng,
                     lat: currentLocation?.lat,
                  }}
               />
            </Map>
         </APIProvider>
      </div>
   );
}
