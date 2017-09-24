import React from 'react';
import { Link } from 'react-router-dom';
import PostFeedDashboardItem from './post_feed_dashboard_item';

class PostFeedDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPostsFromFollowers();
  }

  render(){
    console.log("About to sort", this.props.posts);
    const posts = Object.values(this.props.posts).sort(
      function(a,b) {
        if (a.created_at < b.created_at) {
          return 1;
        } else if (a.created_at < b.created_at) {
          return -1;
        } else {
          return 0;
        }

      }
    ).map(
      (post, idx) => <PostFeedDashboardItem key={post.id} post={post} />
    );
    console.log('RENDERING', posts);
    return (
      <div className="PostFeedDashboard">
        {posts}
      </div>
    );
  }
}

export default PostFeedDashboard;
