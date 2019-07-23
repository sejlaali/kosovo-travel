import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import "./Reviews.css";
import Button from "react-bootstrap/Button";
class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      form: false,
      currentUser: {},
      id: null,
      avgRating: 0,
      ratings: []
    };
  }

  getAvgRating = () => {
    const { ratings } = this.state;
    this.state.reviews.map(review => {
      ratings.push(review.rating);
    });
    let total = 0;
    for (let i = 0; i < ratings.length; i++) {
      total += ratings[i];
    }
    let avgRating = Math.ceil(total / ratings.length)
    this.setState({
      avgRating
    });
  };

  getAllReviews = async () => {
    const res = await axios.get(
      `http://localhost:3000/posts/${this.props.match.params.id}/reviews`
    );
    const reviews = res.data;
    this.setState({
      reviews,
      id: this.props.match.params.id
    });
    this.matchIds();
    this.getAvgRating();
  };

  componentDidMount() {
    this.getAllReviews();
  }

  handleReviewClick = () => {
    if (!this.props.isSignedIn) {
      alert("Please log in or sign up to write a review.");
    } else {
      this.setState({
        form: !this.state.form
      });
    }
  };

  matchIds = async () => {
    const currentUserId = localStorage.getItem("uid");
    const res = await axios.get(`http://localhost:3000/users`);
    const data = res.data;
    const currentUser = data.filter(item => item.email === currentUserId);
    this.setState({
      currentUser: currentUser[0]
    });
  };

  handleReviewDelete = async id => {
    await axios.delete(
      `http://localhost:3000/posts/${this.props.match.params.id}/reviews/${id}`
    );
    this.props.history.push("/activities");
  };

  render() {
    const { currentUser, avgRating } = this.state;

    const renderReviews = this.state.reviews.map(review => {
      if (this.state.currentUser && review.user_id === currentUser.id) {
        return (
          <div
            className="single-review-container"
            style={{ border: "1px solid black" }}
          >
            <h3>{review.title}</h3>
            <p>Rating: {review.rating} out of 5</p>
            <p>{review.review_text}</p>
            <p className="written-by">
              Written by: {review.first_name} {review.last_name}
            </p>
            <Link
              to={`/activity/${this.props.match.params.id}/reviews/${
                review.id
              }/edit`}
            >
              <Button style={{ marginRight: "5px" }} variant="info">
                Edit
              </Button>
            </Link>
            <Button
              onClick={() => this.handleReviewDelete(`${review.id}`)}
              variant="danger"
            >
              Delete
            </Button>
          </div>
        );
      } else {
        return (
          <div
            className="single-review-container"
            style={{ border: "1px solid  black" }}
          >
            <h2>{review.title}</h2>
            <p>Rating: {review.rating} out of 5</p>
            <p>{review.review_text}</p>
            <p className="written-by">
              Written by: {review.first_name} {review.last_name}
            </p>
          </div>
        );
      }
    });

    const rating =
      !this.state.avgRating ? (
      <span>0</span>) :
        (<span>{this.state.avgRating}</span>
      );

    return (
      <div className="reviews-container">
        {this.state.form ? (
          <ReviewForm
            id={this.state.id}
            handleReviewClick={this.handleReviewClick}
            getAllReviews={this.getAllReviews}
            isSignedIn={this.props.isSignedIn}
            isUpdateForm={false}
          />
        ) : null}
        <div style={{ paddingTop: "20px" }}>
          <p className="avg-rating">
            Average Rating: <span>{rating}</span>
          </p>
          <Button onClick={this.handleReviewClick} variant="primary">
            Write a Review!
          </Button>
          <Link to="/activities">
            <Button
              style={{ display: "block", margin: "7px auto", fontSize: "12px" }}
              variant="light"
            >
              Back to Activities
            </Button>
          </Link>
          {renderReviews}
        </div>
      </div>
    );
  }
}

export default Reviews;
