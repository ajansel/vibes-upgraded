import React from 'react';
import Cable from 'actioncable';
import { log } from 'util';

class Chat extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      currentChatMessage: '',
      chatLogs: [],
      errors: [],
      loading: true
    };
    this.createSocket = this.createSocket.bind(this);
    this.renderChatLogs = this.renderChatLogs.bind(this);
  }

  componentWillMount() {
    this.createSocket();
  }

  componentDidMount() {
    this.props.fetchChat(this.props.match.params.chatId)
              .then((res) => { 
                let chatLogs = [];
                if (res.payload.messages) {
                  chatLogs = Object.values(res.payload.messages);
                }
                this.setState({ chatLogs: chatLogs, loading: false });
              });
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.chatId !== newProps.match.params.chatId) {
      this.props.fetchChat(newProps.match.params.chatId).then(
        (res) => {
          let chatLogs = [];
          if (res.payload.messages) {
            chatLogs = Object.values(res.payload.messages);
          }
          this.setState({ chatLogs });
        });
    }
  }

  updateCurrentChatMessage(event) {
    this.setState({
      currentChatMessage: event.target.value
    });
  }
  
  renderChatLogs () {
    return this.state.chatLogs.map(el => {
      let className = 'other-user-message';
      if (el.author_id === this.props.currentUser.id) {
        className = 'current-user-message';
      }
      return (
        <li className={className} key={`chat_${el.id}`}>
          <img src={el.author_img_url} />
          <span className="chat-message">{ el.content }</span>
        </li>
      );
    });
  }

  renderChatErrors () {
    return this.state.errors.map(error => {
      return (
        <li key={`${error}`}>
          <span className="chat-message">{ error }</span>
        </li>
      );
    });
  }

  createSocket() {
    let cable = Cable.createConsumer('ws://localhost:3001/cable');
    let authorId = this.props.currentUser.id;
    let chatId = this.props.chatId;
    this.chats = cable.subscriptions.create({
      channel: 'ChatChannel',
    }, {
      connected: () => {},
      received: (data) => {
        let chatLogs = this.state.chatLogs;
        chatLogs.push(data);
        // This throws a warning because it's trying to setSate on willMount
        this.setState({
          chatLogs: chatLogs, 
          currentChatMessage: '',
          errors: [] });
      }, 
      create: function(chatContent) {
        this.perform('create', {
          content: chatContent,
          chat_id: chatId,
          author_id: authorId
        });
      }
    });
  }

  handleSendEvent(event) {
    event.preventDefault();
    if (this.state.currentChatMessage.length === 0) {
      this.setState({
        errors: ['Message can\'t be blank']
      });
    } else {
      this.chats.create(this.state.currentChatMessage);
    }
  }

  handleChatInputKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleSendEvent(event);
    }
  }

  render() {
    if (this.state.loading) {
      return <div className="loader"> Loading... </div>;
    }

    return (
      <div className="App">
        <div>
          <div className="stage">
            <div className='stage-header'>
              <img onClick={() => this.props.history.push('/chats')} className='back-arrow' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/2000px-Back_Arrow.svg.png'/>
              <h1>Chat</h1>
            </div>
            <div className='chat-logs-wrapper'>

            <ul className="chat-logs">
              {this.renderChatLogs()}
            </ul>
            </div>
            <div className='chat-footer'>
              <input 
                type="text" 
                placeholder="Enter your message..." 
                value={this.state.currentChatMessage}
                onChange={e => this.updateCurrentChatMessage(e)}
                onKeyPress={e => this.handleChatInputKeyPress(e)}
                className="chat-input"/>
              <img className='chat-upload-button' src="https://cdn3.iconfinder.com/data/icons/buttons/512/Icon_16-512.png" alt=""/>
              <img className='chat-upload-button' src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699827-icon-65-file-gif-128.png" alt=""/>
              <button className="chat-button" onClick={e => this.handleSendEvent(e)}>
                Send
              </button>
            </div>
            <ul className="chat-errors">
              {this.renderChatErrors()}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
