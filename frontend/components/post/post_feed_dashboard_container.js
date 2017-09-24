import {connect} from 'react-redux';
import PostFeedDashboard from './post_feed_dashboard';
import {fetchPostsFromFollowers} from '../../actions/post_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  posts: state.entities.posts
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostsFromFollowers: () => dispatch(fetchPostsFromFollowers())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostFeedDashboard);
