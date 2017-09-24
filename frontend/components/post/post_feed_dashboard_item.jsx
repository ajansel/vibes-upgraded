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
      <div onClick={this.handleClick} className="FeedItem">
        <div className="UserPic">
          <img src={this.post.author.img_url}/>
        </div>
        <div className="UserInfoAndPostBody">
          <div className="UsernameAndName">
            <p>{this.post.author.name} {"@" + this.post.author.username}</p>
          </div>
          <div className="PostBody">
            {this.post.body}
          </div>
        </div>
      </div>
    );
  }
}

export default PostFeedDashboardItem;
