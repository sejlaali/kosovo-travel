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
  }
  

  componentDidMount() {
    this.getAllReviews()
  }

  handleReviewClick = () => {
    if (!this.props.isSignedIn) {
      alert("Please log in or sign up to write a review.")
    }
    else {
    this.setState({
      form: !this.state.form
    })}
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

  handleReviewDelete = async (id) => {
    // console.log(evt)
await axios.delete(`http://localhost:3000/posts/${this.props.match.params.id}/reviews/${id}`)
this.props.history.push('/activities')
  }

  render() {
  const {currentUser} = this.state
    
    const renderReviews = this.state.reviews.map(review => {
       if (this.state.currentUser && (review.user_id === currentUser)) {
        return <div style={{ border: "1px solid blue", width: "90%", margin: "0 auto" }}>
        <h2>{review.title}</h2>
        <p>{review.review_text}</p>
        <p>Written by: {review.first_name} {review.last_name}</p>       
        <Link to={`/activity/${this.props.match.params.id}/reviews/${review.id}/edit`}><button>Edit</button></Link>
        <button onClick={() => this.handleReviewDelete(`${review.id}`)}>Delete</button>
        </div>
       } else {
       return <div style={{ border: "1px solid blue", width: "90%", margin: "0 auto" }}>
         <h2>{review.title}</h2>
          <p>{review.review_text}</p>
          <p>Written by: {review.first_name} {review.last_name}</p>
        </div>
       }
    })

    return (
        
      <div style={{height: "100vh", backgroundColor: "white", paddingTop: "15%"}}>
        {this.state.form ? (
        <ReviewForm id={this.state.id} handleReviewClick={this.handleReviewClick} getAllReviews={this.getAllReviews} isSignedIn={this.props.isSignedIn} isUpdateForm={false}/>
        ) : null}
        <button onClick={this.handleReviewClick}>Add a review</button>
        <div style={{backgroundColor: "white"}}>
        {renderReviews}
        
        </div>
      </div>
    );
  }
}


export default Reviews;
