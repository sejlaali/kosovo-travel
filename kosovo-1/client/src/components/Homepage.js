import React, { Component } from "react";
import kosovoImg from "../components/assets/kosovo-flag.png"
import "./Homepage.css"
import {Link} from 'react-router-dom'
import "../App.css"
import {FaQuoteLeft, FaQuoteRight, FaTwitter, FaFacebookF, FaInstagram} from 'react-icons/fa'

class Homepage extends Component {

    render() {
        return (
            <div>
            <h1 className="homepage-title">Welcome to Kosovo</h1>
            <h3 className="homepage-desc">    <FaQuoteLeft style={{marginRight: '10px'}}/> 
Kosovo is a fascinating land at the heart of the Balkans rewarding visitors with welcoming smiles, charming mountain towns, incredible hiking opportunities & 13th-century domed Serbian monasteries brushed in medieval art<span className="hide-mobile"> – and that's just for starters.</span><FaQuoteRight style={{marginLeft: '10px'}}/></h3>
            <hr/>
            <div className="blog-container">
            <h4 className="travel-blog">Travel blogs</h4>
            <div className="videos-container">
            <iframe width="240" height="130" src="https://www.youtube.com/embed/4ZEcOzSdZbE?start=1321" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="240" height="130" src="https://www.youtube.com/embed/v5opSkkNOY0?start=1321" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="240" height="130" src="https://www.youtube.com/embed/m903c39UjP4?start=1321" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="240" height="130" src="https://www.youtube.com/embed/bkzbJI5CjOw?start=1321" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="240" height="130" src="https://www.youtube.com/embed/0dplUZ4mcqI?start=1321" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
           <a href="https://www.expedia.com/Flights-Search?flight-type=on&starDate=07%2F26%2F2019&endDate=07%2F28%2F2019&mode=search&trip=roundtrip&leg1=from%3ANew+York+%28NYC-All+Airports%29%2Cto%3APristina%2C+Kosovo%2C+Serbia%2Cdeparture%3A07%2F26%2F2019TANYT&leg2=from%3APristina%2C+Kosovo%2C+Serbia%2Cto%3ANew+York+%28NYC-All+Airports%29%2Cdeparture%3A07%2F28%2F2019TANYT&passengers=children%3A0%2Cadults%3A1%2Cseniors%3A0%2Cinfantinlap%3AY" target="_blank" className="airplane">Book your trip to <strong>Kosovo</strong> today!</a>
            </div>

            <footer>
            <p><FaInstagram /></p>
            <p><FaFacebookF /></p>
            <p><FaTwitter /></p>
            </footer>

            </div>
        )
    }
}

export default Homepage