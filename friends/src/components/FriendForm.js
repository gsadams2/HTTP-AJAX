import React, { Component } from "react";

export class FriendForm extends Component {
  state = {
    item: {
      id: "",
      name: "",
      age: "",
      email: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.postFriend(this.state.item);
    this.setState({
      item: {
        name: "",
        age: "",
        email: ""
      }
    });
  };

  changeHandler = e => {
    this.setState({
      item: {
        [e.target.name]: e.target.value
      }
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
            value={this.state.item.name}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={this.state.item.age}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.item.email}
            onChange={this.changeHandler}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
