import {connect} from 'react-redux';
import PostForm from './post_form';
import {createPost, updatePost, deletePost} from '../../actions/post_actions';

const mapStateToProps = (state) => ({
  // currentUser: state.session.currentUser,
  // searchResults: state.entities.searchResults
});

const mapDispatchToProps = (dispatch) => ({
  createPost: (post, currentUserId) => dispatch(createPost(post, currentUserId)),
  updatePost: (post) => dispatch(updatePost(post)),
  deletePost: (postId, currentUserId) => dispatch(deletePost(postId, currentUserId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
