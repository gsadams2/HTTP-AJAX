import React, { Component } from "react";
import Friends from "./Friends";

export class FriendList extends Component {
  render() {
    return (
      <div>
        {this.props.list.map(friend => (
          <Friends
            friend={friend}
            okay={this.props.list}
            setUpdateForm={this.props.setUpdateForm}
            activeFriend={this.props.activeFriend}
            key={friend.id}
          />
        ))}
      </div>
    );
  }
}

export default FriendList;
