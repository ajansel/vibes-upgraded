import React from 'react';

class UserSearchIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.currentUser = props.currentUser;
    this.user = props.user;
    this.state = { following: this.user.followed_by_current_user };
    this.followUser = props.followUser;
    this.unfollowUser = props.unfollowUser;
  }

  handleClick(action) {
    return (e) => {
      e.preventDefault();
      if (action === "follow") {
        let oppositeCurrentFollowing = !this.user.followed_by_current_user;
        this.setState({ following: oppositeCurrentFollowing}, () => {
          this.followUser(this.user.id);
        });
      } else {
        let oppositeCurrentFollowing = !this.user.followed_by_current_user;
        this.setState({ following: oppositeCurrentFollowing}, () => {
          this.unfollowUser(this.user.id);
        });
      }
    };
  }

  render() {
    let followButton;
    if (this.state.following) {
      // Unfollow button
      followButton = <button onClick={this.handleClick("unfollow")}>Following</button>;
    } else {
      // follow button
      followButton = <button onClick={this.handleClick("follow")}>Follow</button>;
    }

    return(
      <div>
        <li>
          {this.user.username}
          {followButton}
        </li>
      </div>
    );
  }
}

export default UserSearchIndexItem;
