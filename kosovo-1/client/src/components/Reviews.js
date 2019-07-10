import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import ReviewForm from './ReviewForm'

class Reviews extends Component {
    state = {
     reviews: [],
     form: false
    }

     async componentDidMount() {
        const res = await axios.get(`http://localhost:3000/posts/${this.props.match.params.id}/reviews`)
        console.log(res)
        const reviews = res.data
        this.setState({
            reviews
        })
     }

     handleReviewClick = () => {
        this.setState({
            form: true
        })
     }


render(){
    const renderReviews = this.state.reviews.map(review => (
      <div>
        <h4>{review.title}</h4>
        <p>{review.review_text}</p>
        <p>Written by: {review.first_name} {review.last_name}</p>
        </div>
        ))

    return (
        <div>
        {/* <Link to={`/activity/${this.props.match.params.id}/reviews/create`}> */}
           {this.state.form ? <ReviewForm/> : null}
            <button onClick={this.handleReviewClick}>Add a review</button>
            {/* </Link> */}
       {renderReviews}
        </div>
    )
}
}

export default Reviews