import React, { Component } from "react";
import axios from "axios";
import './ReviewForm.css'

class ReviewForm extends Component {
  constructor(props){
    super(props)
    this.state = {
        first_name: "",
        last_name: "",
        title: "",
        review_text: ""
    }
  }

  async componentDidMount () {
   console.log(this.props.isUpdateForm)
    if (!this.props.isUpdateForm) {
      return
    }
    if (this.props.match.params.review_id) {
      const res = await axios.get(`http://localhost:3000/posts/${this.props.match.params.id}/reviews/${this.props.match.params.review_id}`)
      const {first_name, last_name, title, review_text} = res.data
      this.setState({
        first_name,
        last_name,
        title,
        review_text
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
      await axios.post(`http://localhost:3000/posts/${this.props.id}/reviews`, this.state);
    } else {
      await axios.put(`http://localhost:3000/posts/${this.props.match.params.id}/reviews/${this.props.match.params.review_id}`, this.state)}
      this.setState({
        first_name: "",
        last_name: "",
        title: "",
        review_text: ""
      })
      // this.props.history.push(`/activity/${this.props.match.params.id}/reviews`)
   }

    handleError = () => {
      console.log('error')
      alert('Please make sure you sign in to submit a review')
    }

  render() {
      const {first_name, last_name, title, review_text} = this.state
    const submitConditional = this.props.isSignedIn ?  this.handleReviewSubmit : this.handleError

    return (
      <div style={{backgroundColor: "white"}}>
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
