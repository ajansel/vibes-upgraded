import { connect } from 'react-redux';
import ChatIndex from './chat_index';
import { fetchChats } from '../../actions/chat_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  chats: Object.values(state.entities.chats),
  messages: Object.values(state.entities.messages),
  users: state.entities.users
});

const mapDispatchToProps = (dispatch) => ({
  fetchChats: () => dispatch(fetchChats())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatIndex);
