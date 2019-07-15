import ReactMapGL from 'react-map-gl'
import React, {useState} from 'react'
import './MostPopular.css'
import MapGL, {NavigationControl, Marker} from 'react-map-gl';
import {MdLocationOn} from 'react-icons/md'

const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    // padding: '10px'
  };

export default function MostPopular() {

    //    this.state = {
    //        viewport: {
    //            latitude: 37.785164,
    //         //    42.6026,
    //            longitude: -100,
    //         //    20.9030,
    //            zoom: 6,
    //         //    maxZoom: 25,
    //         //    bearing: 0,
    //         //    pitch: 0,
    //            width: 500,
    //            height: 500,
    //         },
    //         popupInfo: null
    //     };

    const [viewport, setViewport] = useState({
        latitude: 42.667542,
        longitude: 21.166191,
        width: "100vw",
        height: "80vh",
        zoom: 10
    });
    return (
        <div  id="map" style={{backgroundColor: "white"}}>
            <h1>Popular Cities in Kosovo</h1>
            {/* <ReactMapGL
        {...viewport}
        container= 'map'
        center= {
            [
            42.6026,
            20.9030
            ]
        }
        zooom= 'map.getZoom().toFixed(2)'
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxApiAccessToken={TOKEN}>
        <div className="nav" style={navStyle}>
        <NavigationControl onViewportChange={(viewport) => this.setState({ viewport })} />
        <Marker latitude={42.2153} longitude={20.7415}>
        <IoMdPin style={{color: "#caa14e", fontSize: "20px"}}/> Prizren
        </Marker>
        <Marker latitude={42.8914} longitude={20.8660}>
        <IoMdPin style={{color: "#caa14e", fontSize: "20px"}}/> Mitrovica
        </Marker>
        <Marker latitude={42.6629} longitude={21.1655}>
    <IoMdPin style={{color: "#caa14e", fontSize: "20px"}}/> Pristina
        </Marker>
        <Marker latitude={42.6593} longitude={20.2887}>
        <IoMdPin style={{color: "#caa14e", fontSize: "20px"}}/> Peja
        </Marker>

        </div>
      </ReactMapGL> */}
      <ReactMapGL {...viewport}  mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
      mapStyle="mapbox://styles/sejlaali/cjy3s8cw02yzg1cnxos5r713z"
      onViewportChange={
          viewport => {
              setViewport(viewport);
          }}>
        <Marker key="1">
            <div><MdLocationOn /></div>
        </Marker>
      </ReactMapGL>


</div>
    )
}


