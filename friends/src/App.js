import React, { Component } from "react";

import FriendList from "./components/FriendList";
import "./App.css";
import axios from "axios";
import FriendForm from "./components/FriendForm";
import UpdateForm from "./components/UpdateForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      activeFriend: {
        age: "",
        name: "",
        email: ""
      }
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => console.log(err));

    // this.setState({ error: err.response.message });
  }

  postFriend = item => {
    axios
      .post("http://localhost:5000/friends", item)
      .then(res => {
        console.log(res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  setUpdateForm = (ev, item) => {
    ev.preventDefault();
    this.setState({ activeFriend: item });
  };

  updateItem = item => {
    axios
      .put(`http://localhost:5000/friends/${item.id}`, item)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <FriendList
          list={this.state.friends}
          setUpdateForm={this.setUpdateForm}
        />
        <FriendForm postFriend={this.postFriend} />
        <UpdateForm
          updateItem={this.updateItem}
          activeFriend={this.state.activeFriend}
        />
      </div>
    );
  }
}

export default App;
