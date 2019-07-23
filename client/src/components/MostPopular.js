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

      </ReactMapGL>
    </div>
  );
}
