import React from 'react';

class PostFeedDashboardItem extends React.Component {
  constructor(props) {
    super(props);

    this.post = props.post;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(action) {
    console.log("hello there");
  }

  render() {
    return(
      <div onClick={this.handleClick}>
        {this.post.body}
      </div>
    );
  }
}

export default PostFeedDashboardItem;
