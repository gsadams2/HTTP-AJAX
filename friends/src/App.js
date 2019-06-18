import React, { Component } from "react";

import FriendList from "./components/FriendList";
import "./App.css";
import axios from "axios";
import FriendForm from "./components/FriendForm";

class App extends Component {
  state = {
    friends: [],
    error: "",
    activeFriend: null
  };

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

  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", friend)
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

  updateFriend = (e, friend) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  setUpdateForm = (e, friend) => {
    e.preventDefault();
    this.setState({
      activeFriend: friend
    });
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
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
          deleteFriend={this.deleteFriend}
        />
        <FriendForm
          addFriend={this.addFriend}
          updateFriend={this.updateFriend}
          activeFriend={this.state.activeFriend}
        />
      </div>
    );
  }
}

export default App;
