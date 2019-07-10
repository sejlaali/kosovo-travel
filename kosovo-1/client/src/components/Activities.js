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
            <div style={{border: "1px solid black", width: "60%"}}><h3>{activity.title}</h3>
                <h4>City: {activity.city}</h4>
                <img src={activity.image_url}/>
                <h5>{activity.description}</h5>
               <Link to={`/activity/${activity.id}/reviews`}><h3>Show all Reviews</h3></Link>
                {/* <Link to={`/activity/${activity.id}/reviews`}><button>Add a review</button></Link> */}
            </div>
        )
        return (
            <div>
                This is Things to See and Do!
                {activitiesRendering}
                </div>
        )
    }
}

export default Activities