import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReviewForm from "./ReviewForm";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      form: false,
      currentUser: {},
      id: null
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      `http://localhost:3000/posts/${this.props.match.params.id}/reviews`
    );
    const reviews = res.data;
    this.setState({
      reviews,
      id: this.props.match.params.id
    });
    this.matchIds();
  }

  handleReviewClick = () => {
    this.setState({
      form: true
    });
  };

  handleEdit = async () => {

  };

  matchIds = async () => {
    const currentUserId = localStorage.getItem("uid");
    const res = await axios.get(`http://localhost:3000/users`);
    const data = res.data;
    const currentUser = data.filter(item => item.email === currentUserId);
    this.setState({
      currentUser: currentUser[0]
    });
    // console.log(this.state.currentUser.id)
  };

  render() {
    const currentUserReviews = this.state.reviews.filter(item => this.state.currentUser && (item.user_id === this.state.currentUser.id)).map(review => (
        <div style={{ border: "1px solid blue", width: "50%", margin: "0 auto" }}>
        <h2>{review.title}</h2>
        <p>{review.review_text}</p>
        <p>Written by: {review.first_name} {review.last_name}</p>
        <button>Edit</button>
        <button>Delete</button>
        </div>
    ))

    const nonUserReviews = this.state.reviews.filter(item => this.state.currentUser && (item.user_id !== this.state.currentUser.id)).map(review => (
        <div style={{ border: "1px solid blue", width: "50%", margin: "0 auto" }}>
        <h2>{review.title}</h2>
        <p>{review.review_text}</p>
        <p>Written by: {review.first_name} {review.last_name}</p>
        </div>
    ))
    
    const renderReviews = this.state.reviews.map(review => (
        <div style={{ border: "1px solid blue", width: "50%", margin: "0 auto" }}>
        <h4>{review.title}</h4>
        <p>{review.review_text}</p>
        <p>
          Written by: {review.first_name} {review.last_name}
        </p>
      </div>
    ));
    
    const renderReviewsConditional = this.state.currentUser ? 
    <div>
        {currentUserReviews} {nonUserReviews}
    </div> : <div>{renderReviews}</div>

    return (
        
      <div>
        {this.state.form ? (
          <ReviewForm id={this.state.id} isSignedIn={this.props.isSignedIn} />
        ) : null}
        <button onClick={this.handleReviewClick}>Add a review</button>
        <div>
        
        </div>
        {renderReviewsConditional}
      </div>
    );
  }
}

export default Reviews;
