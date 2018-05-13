import { connect } from 'react-redux';
import ChatForm from './chat_form';
import { fetchFollowedUsers } from '../../actions/user_actions';
import { createChat } from '../../actions/chat_actions';

const mapStateToProps = (state) => {
  const currentUser = state.session.currentUser;
  const followedUsers = Object.values(state.entities.users).filter(user => {
    if (user.id !== currentUser.id) {
      return user;
    }
  });

  return {
    currentUser,
    followedUsers 
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchFollowedUsers: () => dispatch(fetchFollowedUsers()),
  createChat: (ids) => dispatch(createChat(ids))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatForm);
