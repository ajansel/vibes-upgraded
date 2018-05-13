import { connect } from 'react-redux';
import Chat from './chat';
import { fetchChat } from '../../actions/chat_actions';

const mapStateToProps = (state, ownProps) => {
  const chatId = parseInt(ownProps.match.params.chatId);

  const messages = Object.values(state.entities.messages).map(message => {
    if (message.chat_id === chatId) {
      return message;
    }
  });

  return {
    currentUser: state.session.currentUser,
    chatId,
    messages
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchChat: (id) => dispatch(fetchChat(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
