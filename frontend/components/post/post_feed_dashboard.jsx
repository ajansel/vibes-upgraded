import React from 'react';
import { Link } from 'react-router-dom';

class PostFeedDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Logic here to pop up the display post, functions the same as
    // post creation except the post body box isn't there
  }

  render(){

    return (
      <div className="PostFeedDashboard">
        
      </div>
    );
  }
}

export default PostFeedDashboard;
