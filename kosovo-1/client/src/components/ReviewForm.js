import React, { Component } from "react";
import axios from "axios";
import "./ReviewForm.css";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      title: "",
      review_text: "",
      rating: null
    };
  }

  async componentDidMount() {
    console.log(this.props.isUpdateForm);
    if (!this.props.isUpdateForm) {
      return;
    }
    if (this.props.match.params.review_id) {
      const res = await axios.get(
        `http://localhost:3000/posts/${this.props.match.params.id}/reviews/${
          this.props.match.params.review_id
        }`
      );
      const { first_name, last_name, title, review_text, rating } = res.data;
      this.setState({
        first_name,
        last_name,
        title,
        review_text,
        rating
      });
    }
  }

  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  handleReviewSubmit = async evt => {
    evt.preventDefault();
    if (!this.props.isUpdateForm) {
      await axios.post(
        `http://localhost:3000/posts/${this.props.id}/reviews`,
        this.state
      );
      this.props.handleReviewClick();
      this.props.getAllReviews();
    } else {
      await axios.put(
        `http://localhost:3000/posts/${this.props.match.params.id}/reviews/${
          this.props.match.params.review_id
        }`,
        this.state
      );
      this.props.history.push(
        `/activity/${this.props.match.params.id}/reviews`
      );
    }
    this.setState({
      first_name: "",
      last_name: "",
      title: "",
      review_text: "",
      rating: null
    });
  };

  handleError = () => {
    console.log("error");
    alert("Please make sure you sign in to submit a review");
  };

  handleOptionChange = (event)=> {
    this.setState({rating: event.target.value});
  }

  render() {
    const { first_name, last_name, title, review_text, rating } = this.state;
    const submitConditional = this.props.isSignedIn
      ? this.handleReviewSubmit
      : this.handleError;

    return (
      <div
        style={{ paddingTop: "10px", height: "70vh", backgroundColor: "white" }}
      >
        <Form style={{ margin: "10px" }}>
          <Form.Label>First Name</Form.Label>

          <Form.Control
            name="first_name"
            onChange={this.handleChange}
            value={first_name}
            placeholder="First name"
          />
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="last_name"
            value={last_name}
            onChange={this.handleChange}
            placeholder="Last name"
          />
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            onChange={this.handleChange}
            value={title}
            placeholder="Title"
          />

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={review_text}
              name="review_text"
              onChange={this.handleChange}
              as="textarea"
              rows="3"
            />
          </Form.Group>
          <Form.Group
            // value={rating}
            name="rating"
            onChange={this.handleChange}
            controlId="exampleForm.ControlSelect1"
          >
            <Form.Label>Rating</Form.Label>
            <Form.Control value={rating} onChange={this.handleOptionChange} as="select">
              <option>1</option>
              <option >2</option>
              <option >3</option>
              <option >4</option>
              <option >5</option>
            </Form.Control>
          </Form.Group>
          <Button onClick={submitConditional} variant="success">
            Submit Review
          </Button>
          <Link to="/activities">
            <Button style={{ marginLeft: "5px" }} variant="danger">
              Cancel
            </Button>
          </Link>
        </Form>

        <br />
        <br />
      </div>
    );
  }
}

export default ReviewForm;
