import React, { Component } from "react";
import axios from "axios";
import './ReviewForm.css'
import {Link} from 'react-router-dom'

class ReviewForm extends Component {
  constructor(props){
    super(props)
    this.state = {
        first_name: "",
        last_name: "",
        title: "",
        review_text: "",
        rating: null
    }
  }

  async componentDidMount () {
   console.log(this.props.isUpdateForm)
    if (!this.props.isUpdateForm) {
      return
    }
    if (this.props.match.params.review_id) {
      const res = await axios.get(`http://localhost:3000/posts/${this.props.match.params.id}/reviews/${this.props.match.params.review_id}`)
      const {first_name, last_name, title, review_text, rating} = res.data
      this.setState({
        first_name,
        last_name,
        title,
        review_text,
        rating
      })
    }
  }

    handleChange = e => {
        let name = e.target.name 
        let value = e.target.value;
        this.setState({
          [name]: value
        })
      };


    handleReviewSubmit = async (evt)=> {
    evt.preventDefault()
    if (!this.props.isUpdateForm) {
      await axios.post(`http://localhost:3000/posts/${this.props.id}/reviews`, this.state)
      this.props.handleReviewClick()
      this.props.getAllReviews()
    } else {
      await axios.put(`http://localhost:3000/posts/${this.props.match.params.id}/reviews/${this.props.match.params.review_id}`, this.state)
      this.props.history.push(`/activity/${this.props.match.params.id}/reviews`)
    }
    this.setState({
      first_name: "",
      last_name: "",
      title: "",
      review_text: "",
      rating: null
    })
   }

    handleError = () => {
      console.log('error')
      alert('Please make sure you sign in to submit a review')
    }

  render() {
      const {first_name, last_name, title, review_text, rating} = this.state
    const submitConditional = this.props.isSignedIn ?  this.handleReviewSubmit : this.handleError

    return (
      <div style={{paddingTop: "40px", height: "50vh", backgroundColor: "white"}}>
        <form>
        <div>
            <label htmlFor="first name">First Name</label>
            <br/>
            <input
              onChange={this.handleChange}
              type="text"
              name="first_name"
              value={first_name}
                />
        </div>
        <div>
            <label htmlFor="last name">Last Name</label>
            <br/>

            <input
              onChange={this.handleChange}
              type="text"
              name="last_name"
              value={last_name}
                />
        </div>
        <div>
            <label htmlFor="title">Title</label>
            <br/>

            <input
              onChange={this.handleChange}
              type="text"
              name="title"
              value={title}
                />
        </div>
        <div>
            <label htmlFor="review text">Review Description</label>
            <br/>
            <input
              onChange={this.handleChange}
              type="textarea"
              name="review_text"
              value={review_text}
                />
        </div>
        <div>
            <label htmlFor="rating">Rating</label>
            <br/>
            <input
              onChange={this.handleChange}
              type="number"
              name="rating"
              value={rating}
                />
        </div>
        <button onClick={submitConditional}>Submit Review</button>
        <Link to="/activities"><button>Cancel</button></Link>
        </form>
        <br/>
        <br/>

      </div>
    );
  }
}

export default ReviewForm;
