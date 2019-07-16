import ReactMapGL from "react-map-gl";
import React, { useState, useEffect } from "react";
import "./MostPopular.css";
import MapGL, { Marker } from "react-map-gl";
import { MdLocationOn } from "react-icons/md";
import { Popup } from "react-map-gl";
import axios from 'axios'

export default function MostPopular() {
  const [viewport, setViewport] = useState({
    latitude: 42.667542,
    longitude: 21.166191,
    width: "100vw",
    height: "80vh",
    zoom: 8
  });

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedCity(null);
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/posts")
    .then(result => setData(result.data));
  }, []);

  const markers = data.map(activity => 
    activity.longitude && activity.latitude ? 
    <Marker longitude={parseFloat(activity.longitude)} latitude={parseFloat(activity.latitude)}>
        <div
      onClick={e => {
        e.preventDefault();
        setSelectedCity(activity)
      }}
      style={{ fontSize: "30px", color: "#caa14e" }}
    >
      <MdLocationOn />
    </div>
    </Marker>
  : null
  )

  const [selectedCity, setSelectedCity] = useState(null);
  return (
    <div id="map" style={{ backgroundColor: "white" }}>
      <h1>Popular Cities in Kosovo</h1>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/sejlaali/cjy3s8cw02yzg1cnxos5r713z"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {markers}
  
        {selectedCity ? <Popup
            onClose={() => {
              setSelectedCity(null);
            }}
          longitude={parseFloat(selectedCity.longitude)} latitude={parseFloat(selectedCity.latitude)}
          >
            <div>
              <h2>{selectedCity .city}</h2>
              <p>
                {selectedCity.description}
              </p>
            </div>
          </Popup> : null} 
        {/* {selectedCity === "Mitrovica" ? (
          
        ) : null} */}

        {/* {selectedCity === "Prishtina" ? (
          <Popup
            onClose={() => {
              setSelectedCity(null);
            }}
            longitude={21.1655}
            latitude={42.6629}
          >
            {" "}
            <div>
              <h2>Prishtina</h2>
              <p>
                Pristina was the capital of the Serbian state before the Turks
                defeated the Balkan Christian armies in 1389 at the Battle of
                Kosovo, which was fought on the Kosovo Plain west of Pristina.
              </p>
            </div>
          </Popup>
        ) : null}

        {selectedCity === "Prizren" ? (
          <Popup
            onClose={() => {
              setSelectedCity(null);
            }}
            longitude={20.7415}
            latitude={42.2153}
          >
            <div>
              <h2>Prizren</h2>
              <p>
                Nestled in a valley between the Sharr Mountains on one side and
                the ruins of a hilltop citadel on the other, Prizren is
                beautifully situated. Flowing through the heart of the city is
                the Lumbardhi (Bistrica) River, its fast-flowing waters skimming
                over a riverbed of boulders and under the many bridges that
                criss-cross the city.
              </p>
            </div>
          </Popup>
        ) : null}

        {selectedCity === "Peja" ? (
          <Popup
            onClose={() => {
              setSelectedCity(null);
            }}
            longitude={20.2887}
            latitude={42.6593}
          >
            <div>
              <h2>Peja</h2>
              <p>
                The medieval city was possibly built on the ruins of
                Siparant(um), a Roman municipium (town or city). The area has
                the most unearthed stelae in all of Kosovo.
              </p>
            </div>
          </Popup>
        ) : null}

        {selectedCity === "Gazivoda Lake" ? (
          <Popup
          onCloce
          >

          </Popup>
        )} */}
      </ReactMapGL>
    </div>
  );
}
