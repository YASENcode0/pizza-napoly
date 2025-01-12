import React from "react";
import "./Location.css";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function Location() {
   function Relocation() {
      console.log(navigator.geolocation.getCurrentPosition(abc));
      function abc(a) {
         console.log(a.coords);
      }
   }
   Relocation();

   return (
      <div className="location">
         <div className="location-map">
            <APIProvider apiKey={"AIzaSyA_01vV-UG-8kyxW5K-IntxTPOHQURDsME"}>
               <Map
                  style={{ width: "100%", height: "100%" }}
                  defaultCenter={{
                     lat: 51.507351,
                     lng: -0.127758,
                  }}
                  defaultZoom={15}
                  gestureHandling={"greedy"}
                  disableDefaultUI={true}
                  mapTypeId={"roadmap"}
               >
                  <Marker
                     position={{
                        lng: -0.127758,
                        lat: 51.507351,
                     }}
                  />
               </Map>
            </APIProvider>
         </div>
         <div className="location-map-controls">1</div>
      </div>
   );
}
