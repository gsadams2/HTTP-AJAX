import React, { Component } from "react";

export class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: this.props.activeFriend || {
        name: "",
        age: "",
        email: "",
        id: 0
      },
      active: false
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.activeFriend &&
      prevProps.activeFriend !== this.props.activeFriend
    ) {
      this.setState({ friend: this.props.activeFriend, active: true });
    }
  }

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.postFriend(this.state);
  //   this.setState({
  //     id: "",
  //     name: "",
  //     age: "",
  //     email: ""
  //   });
  // };

  submitHandler = (e, friend) => {
    if (this.state.active) {
      this.props.updateFriend(e, this.state.friend);
    } else {
      this.props.addFriend(e, this.state.friend);
    }
    this.setState({
      friend: {
        name: "",
        age: "",
        email: "",
        id: 0
      },
      avtive: false
    });
  };

  changeHandler = e => {
    e.persist();
    this.setState(prevState => ({
      friend: { ...prevState.friend, [e.target.name]: e.target.value }
    }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
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
          <button onClick={this.submitHandler}>
            {`${this.state.active ? "Update" : "Add Friend"}`}
          </button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
