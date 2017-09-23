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
    const posts = this.props.posts.map(
      (post) => <PostFeedDashboardItem post={post}/>
    );

    return (
      <div className="PostFeedDashboard">
        {posts}
      </div>
    );
  }
}

export default PostFeedDashboard;
