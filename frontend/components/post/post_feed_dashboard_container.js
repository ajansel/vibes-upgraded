import {connect} from 'react-redux';
import PostFeedDashboard from './post_feed_dashboard';
import {fetchPostsFromFollowers, fetchProfilePosts}
        from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    posts: state.entities.posts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPostsFromFollowers: () => dispatch(fetchPostsFromFollowers()),
  fetchProfilePosts: (id) => dispatch(fetchProfilePosts(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostFeedDashboard);
