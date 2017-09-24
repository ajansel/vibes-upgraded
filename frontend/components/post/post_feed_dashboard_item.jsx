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
        <div className="UserInfo">
          <img src={this.post.author.img_url}/>
          <div className="UserNames">
            <p>{this.post.author.name}</p>
            <p>{"@" + this.post.author.username}</p>
          </div>
        </div>
        {this.post.body}
      </div>
    );
  }
}

export default PostFeedDashboardItem;
