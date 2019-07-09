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
        return (
            <div>
                This is Things to See and Do!
                
                </div>
        )
    }
}

export default Activities