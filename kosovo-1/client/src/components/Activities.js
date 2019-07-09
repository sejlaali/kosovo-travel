import React, { Component } from "react";
import axios from 'axios'

class Activities extends Component {
    state = {
        activities: []
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