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
        <div>
          <h3>Hello {this.props.currentUser.username}</h3>
          <button onClick={this.handleClick()}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      );
    }
  }
}

export default SessionButtons;
