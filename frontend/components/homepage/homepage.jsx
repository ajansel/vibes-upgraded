import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="Homepage">
        <section className="Intro">
          <h1>Good. Vibes. Only.</h1>
          <p>No more custom posts or subtweets. Vibes let's you express
          yourself through lytics. Search for your favorite song, highlight
          the snippet of lyrics that fits your fibe, and click post.
          It's fast, easy, and free!</p>
        <div className="SignupButtons">
          <Link to="/signup">Sign Up</Link>
          <Link to="/signup">See Demo</Link>
        </div>
        </section>
      </div>
    );
  }
}

export default Homepage;
