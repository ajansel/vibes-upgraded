import React from 'react';
import Modal from 'react-modal';
import PostFormContainer from '../post/post_form_container';
import PostShow from '../post/post_show';

const customStyles = {
  content : {
    top                   : '56%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '500px',
    height                : '500px',
    // overflow              : 'hidden'
  },
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
  }
};

class PostFeedDashboardItem extends React.Component {
  constructor(props) {
    super(props);

    this.post = props.post;
    this.state = { modalIsOpen: false };
    this.openModal = this.openModal.bind(this);
    this.afterModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  afterOpenModal() {

  }

  render() {
    let likes;
    if (this.post.likes > 0) likes = this.post.likes;
    return(
      <div className="FeedItem">
        <div className="UserPic">
          <img src={this.post.author.img_url}/>
        </div>
        <div className="UserInfoAndPostBody">
          <div className="UsernameAndName">
            <p>{this.post.author.name} {"@" + this.post.author.username}</p>
          </div>
          <div className="PostBody" onClick={this.openModal}>
            {this.post.body}
          </div>
          <div className="LikeContent">
            <button className="LikeButton">Like</button>
            {likes}
          </div>
        </div>


        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={customStyles}
          >
          <PostShow song={this.post.song} closeModal={this.closeModal}
                    user={this.post.author}/>
        </Modal>
      </div>
    );
  }
}

export default PostFeedDashboardItem;
