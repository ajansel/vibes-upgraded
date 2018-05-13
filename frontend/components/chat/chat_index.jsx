import React from 'react';
import Cable from 'actioncable';

class ChatIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    this.props.fetchChats().then(() => this.setState({ loading: false }));
  }

  getFirstMessage(chatId) {
    const chatMessages = this.props.messages.filter(message => {
      if (message.chat_id === chatId) {
        return message;
      }
    });

    const sortedChatMessages = chatMessages.sort(
      function (a, b) {
        if (a.updated_at < b.updated_at) {
          return 1;
        } else if (a.updated_at > b.updated_at) {
          return -1;
        } else {
          return 0;
        }
      }
    );
    
    if (sortedChatMessages.length === 0) {
      return null;
    } else {
      return sortedChatMessages[0];
    }
  }
  
  formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  render() {
    if (this.state.loading) {
      return <div className="loader"> Loading... </div>;
    }

    const sortedChats = this.props.chats.sort(
      function (a, b) {
        if (a.updated_at < b.updated_at) {
          return 1;
        } else if (a.updated_at > b.updated_at) {
          return -1;
        } else {
          return 0;
        }
      }
    );
    
    const chatDivs = sortedChats.map(chat => {
      const firstMessage = this.getFirstMessage(chat.id);

      if (firstMessage !== null) {
        let otherMembers = ` @${firstMessage.author_username}`;
        if (chat.member_count === 3) {
          let ids = chat.member_ids;
          ids.splice(this.props.currentUser.id, 1);
          ids.splice(firstMessage.author_id, 1);
          otherMembers = `, ${this.props.users[ids[0]].name}`;
        } else if (chat.member_count > 3) {
          otherMembers = ` + ${chat.member_count - 2} others`;
        }

          // <li key={chat.id}
          //   onClick={() => this.props.history.push(`/chats/${chat.id}`)}>
          //   <ul>
          //     <li><img className='chat-index-img' src={ firstMessage.author_img_url }/></li>
          //     <li>{`${firstMessage.author_name}${otherMembers}`}</li>
          //     <li>{firstMessage.updated_at}</li>
          //     <li>{firstMessage.content}</li>
          //   </ul>
          // </li>
        return (
          <div className="FeedItem ChatFeedItem" key={chat.id}
            onClick={() => this.props.history.push(`/chats/${chat.id}`)}>
            <div className="UserPic">
              <img className='chat-index-img' src={firstMessage.author_img_url} />
            </div>
            <div className="UserInfoAndPostBody">
              <div className="UsernameAndName">
                <p>{`${firstMessage.author_name}${otherMembers}`}</p>
                <div className="most-recent-message">{this.formatDate(new Date(firstMessage.updated_at))}</div>
              </div>
              <div className="PostBody">
                {firstMessage.content}
              </div>
            </div>
          </div>
        );
      }
    }).filter(chatLi => chatLi !== undefined);
    
    return (
      <main className="PageContainer">
        <div className="chat-index">
          <div className='ChatFeedDashboard'>
            <button className='chat-button' onClick={() => this.props.history.push('/chats/new')}>
              New Message
            </button>
            {chatDivs}
          </div>
        </div>
      </main>
    );
  }
}

export default ChatIndex;
