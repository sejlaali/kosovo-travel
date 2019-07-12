import React, { Component } from "react";
import kosovoImg from "../components/assets/kosovo-flag.png"
import "./Homepage.css"
import {Link} from 'react-router-dom'
import axios from 'axios'
import {IoIosArrowForward} from 'react-icons/io'

class Homepage extends Component {

    render() {
        return (
            <div>
            <h1>Welcome to Kosovo</h1>
                <h4 className="travel-blog">Travel blogs</h4>
            <div className="videos-container">
            <iframe width="240" height="130" src="https://www.youtube.com/embed/4ZEcOzSdZbE?start=1321" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="240" height="130" src="https://www.youtube.com/embed/v5opSkkNOY0?start=1321" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="240" height="130" src="https://www.youtube.com/embed/m903c39UjP4?start=1321" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="240" height="130" src="https://www.youtube.com/embed/bkzbJI5CjOw?start=1321" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="240" height="130" src="https://www.youtube.com/embed/0dplUZ4mcqI?start=1321" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h2><IoIosArrowForward/></h2>
            </div>
        )
    }
}

export default Homepage