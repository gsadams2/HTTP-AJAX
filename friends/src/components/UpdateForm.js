import React, { Component } from "react";

export class UpdateForm extends Component {
  state = {
    age: 0,
    name: "",
    email: ""
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        age: this.props.activeFriend.age,
        name: this.props.activeFriend.name,
        email: this.props.activeFriend.email
      });
    }
  }

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.updateItem(this.state);
  };

  changeHandler = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.changeHandler}
          />
          <button onClick={this.handleSubmit}>Update Form</button>
        </form>
      </div>
    );
  }
}

export default UpdateForm;
