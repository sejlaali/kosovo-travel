import ReactMapGL from 'react-map-gl'
import React, {Component} from 'react'
import './MostPopular.css'
import MapGL, {NavigationControl, Marker} from 'react-map-gl';
import {IoMdPin} from 'react-icons/io'

const TOKEN = 'pk.eyJ1Ijoic2VqbGFhbGkiLCJhIjoiY2p5MGdmcGUxMDJ1eDNsbGV4czBod2wxZCJ9.oXQmFa0BWv9YkBlP6zCKCA'

const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    // padding: '10px'
  };

class MostPopular extends Component {
   constructor() {
       super()
       this.state = {
           viewport: {
               latitude: 42.6026,
               longitude: 20.9030,
               zoom: 7,
            //    maxZoom: 25,
            //    bearing: 0,
            //    pitch: 0,
               width: 375,
               height: 500,
            },
            popupInfo: null
        };
    }
    

render() {
    const {viewport} = this.state;

    return (
        <div  id="map" style={{backgroundColor: "white"}}>
            <h1>this is most popular page</h1>
            <MapGL
        {...viewport}
        container= 'map'
        center= {
            [
            42.6026,
            20.9030
            ]
        }
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
      </MapGL>
</div>
    )
}
}

export default MostPopular

