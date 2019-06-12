import React, { Component } from "react";

import FriendList from "./components/FriendList";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [
        {
          id: "",
          name: "",
          age: "",
          email: ""
        }
      ]
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err.response.message });
      });
  }

  render() {
    return (
      <div>
        <FriendList list={this.state.friends} />
      </div>
    );
  }
}

export default App;
