import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const demoUser = { username: 'jonsnow', password: 'password' };
    this.props.login(demoUser).then(() => this.props.history.push("/dashboard"));
  }

  render(){
    return (
      <div className="Homepage">
        <div className="Intro">
          <h1>Good. Vibes. Only.</h1>
          <p>No more custom posts or subtweets. Vibes let's you express
          yourself through lytics. Search for your favorite song, highlight
          the snippet of lyrics that fits your fibe, and click post.
          It's fast, easy, and free!</p>
          <div className="SignupButtons">
            <Link to="/signup">Sign Up</Link>
            <a onClick={this.handleClick}>See Demo</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
