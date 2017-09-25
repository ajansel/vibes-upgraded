import {connect} from 'react-redux';
import PostFeedDashboard from './post_feed_dashboard';
import {fetchPostsFromFollowers, fetchProfilePosts}
        from '../../actions/post_actions';
import {likePost, unlikePost} from '../../actions/post_actions';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    posts: state.entities.posts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPostsFromFollowers: () => dispatch(fetchPostsFromFollowers()),
  fetchProfilePosts: (id) => dispatch(fetchProfilePosts(id)),
  likePost: (postId) => dispatch(likePost(postId)),
  unlikePost: (postId) => dispatch(unlikePost(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostFeedDashboard);
