import React, { Component } from "react";
import Friends from "./Friends";

export class FriendList extends Component {
  render() {
    return (
      <div>
        {this.props.list.map(friend => (
          <Friends
            friend={friend}
            history={this.props.history}
            setUpdateForm={this.props.setUpdateForm}
            key={friend.id}
            deleteFriend={this.props.deleteFriend}
          />
        ))}
      </div>
    );
  }
}

export default FriendList;
