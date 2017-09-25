import React from 'react';
import Modal from 'react-modal';
import PostFormContainer from '../post/post_form_container';
import PostShow from '../post/post_show';
import { Link } from 'react-router-dom';

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
    this.likePost = props.likePost;
    this.unlikePost = props.unlikePost;
    this.state = { modalIsOpen: false, liked: this.post.liked_by_current_user, likes: this.post.likes };
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

  handleClick(action) {
    return (e) => {
      e.preventDefault();
      if (action === "like") {
        let oppositeCurrentLiked = !this.state.liked;
        this.setState({ liked: oppositeCurrentLiked, likes: this.state.likes + 1}, () => {
          this.likePost(this.post.id);
        });
      } else {
        let oppositeCurrentLiked = !this.state.liked;
        this.setState({ liked: oppositeCurrentLiked, likes: this.state.likes - 1}, () => {
          this.unlikePost(this.post.id);
        });
      }
    };
  }

  render() {
    let likes;
    if (this.state.likes > 0) likes = this.state.likes;

    let likeButton;
    if (this.state.liked) {
      // Unfollow button
      likeButton = <button className="LikeButton" onClick={this.handleClick("unlike")}>Liked</button>;
    } else {
      // follow button
      likeButton = <button className="LikeButton" onClick={this.handleClick("like")}>Like</button>;
    }
    return(
      <div className="FeedItem">
        <div className="UserPic">
          <Link to={`/profile/${this.post.author.id}`}><img src={this.post.author.img_url}/></Link>
        </div>
        <div className="UserInfoAndPostBody">
          <div className="UsernameAndName">
            <Link to={`/profile/${this.post.author.id}`}><p>{this.post.author.name} {"@" + this.post.author.username}</p></Link>
          </div>
          <div className="PostBody" onClick={this.openModal}>
            {this.post.body}
          </div>
          <div className="LikeContent">
            {likeButton}
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
