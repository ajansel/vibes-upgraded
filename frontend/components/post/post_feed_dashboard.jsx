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
    const posts = Object.values(this.props.posts).map(
      (post, idx) => <PostFeedDashboardItem post={post} key={idx}/>
    );

    return (
      <div className="PostFeedDashboard">
        {posts}
      </div>
    );
  }
}

export default PostFeedDashboard;
