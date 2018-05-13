import React from 'react';
import Cable from 'actioncable';
import { log } from 'util';

class ChatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMemberIds: [],
      loading: true,
      errors: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchFollowedUsers().then(() => this.setState({loading: false}));
  }

  toggleUser(userId) {
    const chatMemberIds = this.state.chatMemberIds;
    const idx = chatMemberIds.indexOf(userId);
    if (idx >= 0) {
      chatMemberIds.splice(idx, 1);
      this.setState({ chatMemberIds, errors: [] });
    } else {
      chatMemberIds.push(userId);
      this.setState({ chatMemberIds, errors: [] });
    }
  }

  findUser(userId) {
    for (let idx = 0; idx < this.props.followedUsers.length; idx++) {
      if (this.props.followedUsers[idx].id === userId) {
        return this.props.followedUsers[idx];
      }
    }
  }

  handleClick() {
    if (this.state.chatMemberIds.length === 0) {
      this.setState({
        errors: ['Please choose at least one user']
      });
    } else {
      this.props.createChat(this.state.chatMemberIds)
                .then((res) => this.props.history.push(`/chats/${Object.values(res.payload.chat)[0].id}`));
    }
  }

  renderChatErrors() {
    return this.state.errors.map(error => {
      return (
        <li key={`${error}`}>
          <span className="chat-message">{error}</span>
        </li>
      );
    });
  }

  render() {
    if (this.state.loading) {
      return <div className="loader"> Loading... </div>;
    }
    return (
      <div className='App'>
        <div>
          <div className='stage'>
            <div className='stage-header'>
              <img className='back-arrow' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/2000px-Back_Arrow.svg.png" alt=""
                onClick={() => this.props.history.push('/chats')} />
              <h1>New Message</h1>
            </div>
            <h3>Send message to:</h3>
            <ul className='new-chat-members'>
              {this.state.chatMemberIds.map(userId => {
                const user = this.findUser(userId);            
                return <li key={userId}>{user.name}</li>;
              })}
            </ul>
            <h3>Recent:</h3>
            <div className='recent-users'>
              {this.props.followedUsers.map(user => (
                <div className="FeedItem ChatFeedItem" id='ChatFeedItem' key={user.id}
                  onClick={() => this.toggleUser(user.id)}>
                  <div className="UserPic">
                    <img className='chat-index-img' src={user.img_url} />
                  </div>
                  <div className="UserInfoAndPostBody">
                    <div className="UsernameAndName">
                      <p>{`${user.name} @${user.username}`}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='button-wrapper'>
              <button id='next-chat-button' className='chat-button' onClick={this.handleClick}>
                Next
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

export default ChatForm;
