import React, { Component } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Activities.css'
import {FaLocationArrow} from 'react-icons/fa'
import {MediaQuery }from 'react-responsive'
class Activities extends Component {
    state = {
        activities: [],
        reviews: []
    }

    async componentDidMount() {
        const res = await axios.get("http://localhost:3000/posts")
        const activities = res.data
        this.setState({
            activities
        })
    }

    render() {

        const activitiesRendering = this.state.activities.map(activity => 
            <div className="activities" style={{borderBottom: "1px solid black", width: "100%", margin: "0 auto"}}>
                <h3>{activity.title}</h3>
                <img src={activity.image_url}/>
               <h4><span><FaLocationArrow/></span> {activity.city}</h4>
                <h5>{activity.description}</h5>
               <Link className="Link" to={`/activity/${activity.id}/reviews`}><p className="Link-p">{activity.title} Reviews</p></Link>
            </div>
        )
        return (
            <div>
            <MediaQuery query='(min-width: 1024px)'>
             <h1>Things to See and Do</h1>
            </MediaQuery>
            <div className="activities-div" style={{backgroundColor: "white", paddingTop: "20%"}}>
             <h1 className="hide-desktop">Things to See and Do</h1>
                {activitiesRendering}
                </div>
                </div>
        )
    }
}

export default Activities