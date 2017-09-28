import React from 'react';
import { Link } from 'react-router-dom';
import PostFeedDashboardItem from './post_feed_dashboard_item';

class PostFeedDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userId: props.userId};
  }

  componentWillMount() {

    if (this.props.feedType === 'dashboard'){
      this.props.fetchPostsFromFollowers();
    } else if (this.props.feedType === 'profile'){
      this.props.fetchProfilePosts(this.props.userId);
    }
  }

  componentWillReceiveProps(newProps){
    if(this.state.userId !== newProps.userId){
      if (this.props.feedType === 'dashboard'){
        this.props.fetchPostsFromFollowers().then(
        this.setState({userId: newProps.userId}));
      } else if (this.props.feedType === 'profile'){
        this.props.fetchProfilePosts(newProps.userId).then(
        this.setState({userId: newProps.userId}));
      }
    }
  }

  render(){
    if(this.props.loading === true) return <div className="loader"> Loading... </div>;

    let posts = Object.values(this.props.posts);

    posts = posts.sort(
      function(a,b) {
        if (a.created_at < b.created_at) {
          return 1;
        } else if (a.created_at > b.created_at) {
          return -1;
        } else {
          return 0;
        }
      }
    );

    posts = posts.map(
      (post) => <PostFeedDashboardItem key={new Date() + post.id} post={post}
                        likePost={this.props.likePost}
                        unlikePost={this.props.unlikePost}
                        currentUser={this.props.currentUser}
                        feedType={this.props.feedType}
                        fetchProfilePosts={this.props.fetchProfilePosts}
                        fetchPostsFromFollowers={this.props.fetchPostsFromFollowers}/>
    );


    return (
      <div className="PostFeedDashboard">
        {posts}
      </div>
    );
  }
}

export default PostFeedDashboard;
