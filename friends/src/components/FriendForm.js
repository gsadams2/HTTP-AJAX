import React, { Component } from "react";

export class FriendForm extends Component {
  render() {
    return (
      <div>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="age" placeholder="Age" />
        <input type="email" name="age" placeholder="Email" />
      </div>
    );
  }
}

export default FriendForm;
