import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class SessionButtons extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.props.logout;
    this.handleClick = this.handleClick.bind(this);
    this.handleProfileClick = this.handleProfileClick.bind(this);
  }

  handleProfileClick() {
    return (e) => {
      e.preventDefault();
      console.log(this.props);
      
      this.props.history.push("/edit-account");
    };
  }

  handleClick() {
    return (e) => {
      e.preventDefault();
      this.logout().then(() => this.props.history.push("/login"));
    };
  }

  render(){
    if (this.props.currentUser) {
      return (
        <div className="SessionButtons">
          <img className="profile-pic" src={this.props.currentUser.img_url} onClick={this.handleProfileClick()}/>
          <img id="message-icon-pic" onClick={() => this.props.history.push("/chats")}
            src='https://cdn4.iconfinder.com/data/icons/integral/128/message-128.png'/>
          <a onClick={this.handleClick()}>Logout</a>
        </div>
      );
    } else {
      return (
        <div className="SessionButtons">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      );
    }
  }
}

export default withRouter(SessionButtons);
