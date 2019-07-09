import React, { Component } from "react";
import axios from "axios";

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

  render() {
      const {first_name, last_name, title, review_text} = this.state


    return (
      <div>
        hi review form
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
            <input style={{height: "100px", width: "50%"}}
              onChange={this.handleChange}
              type="textarea"
              name="review_text"
              value={review_text}
                />
        </div>
        <button onClick={this.handleReviewSubmit}>Submit Review</button>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
