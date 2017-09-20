import React from 'react';
import { Link } from 'react-router-dom';

class SessionButtons extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.props.logout;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return (e) => {
      e.preventDefault();
      this.logout();
    };
  }

  render(){
    if (this.props.currentUser) {
      return (
        <div className="SessionButtons">
          <img src={this.props.currentUser.img_url}/>
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

export default SessionButtons;
