import React, { Component } from "react";
import axios from "axios";
import './ReviewForm.css'

class ReviewForm extends Component {
    state = {
        first_name: "",
        last_name: "",
        title: "",
        review_text: ""
    }

    handleChange = e => {
        let name = e.target.name 
        let value = e.target.value;
        this.setState({
          [name]: value
        })
      };

    handleReviewSubmit = async (e) => {
    e.preventDefault()
      await axios.post(`http://localhost:3000/posts/${this.props.match.params.id}/reviews`, this.state)
    }

    handleError = () => {
      alert('try again')
    }

  render() {
      const {first_name, last_name, title, review_text} = this.state
    const submitConditional = this.props.isSignedIn ?  this.handleReviewSubmit : this.handleError
    return (
      <div>
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
        <button onClick={submitConditional}>Submit Review</button>
        </form>
        <br/>
        <br/>

      </div>
    );
  }
}

export default ReviewForm;
