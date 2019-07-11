import React, { Component } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'

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
            <div style={{borderBottom: "1px solid black", width: "90%", margin: "0 auto"}}><h3>{activity.title}</h3>
                <h4>City: {activity.city}</h4>
                <img src={activity.image_url}/>
                <h5>{activity.description}</h5>
               <Link to={`/activity/${activity.id}/reviews`}><h3>Show all Reviews</h3></Link>
            </div>
        )
        return (
            <div style={{backgroundColor: "white", paddingTop: "20%"}}>
                {activitiesRendering}
                </div>
        )
    }
}

export default Activities