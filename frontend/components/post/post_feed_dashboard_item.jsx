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
      if (this.props.currentUser && action === "like") {
        let oppositeCurrentLiked = !this.state.liked;
        this.setState({ liked: oppositeCurrentLiked, likes: this.state.likes + 1}, () => {
          this.likePost(this.post.id);
        });
      } else if (this.props.currentUser) {
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
    let heartColor;
    if (this.state.liked) {
      // Unfollow button
      heartColor = 'red';
      likeButton =
      <button className="LikeButton" onClick={this.handleClick("unlike")}>
        <i className={`fa fa-heart fa-lg ${heartColor}`} aria-hidden="true"></i>
      </button>;
    } else {
      // follow button
      heartColor = 'border';
      likeButton =
      <button className="LikeButton" onClick={this.handleClick("like")}>
        <i className={`fa fa-heart-o fa-lg ${heartColor}`} aria-hidden="true"></i>
      </button>;
    }

    let form;
    if (this.props.currentUser && this.props.currentUser.id === this.post.author.id) {
      form = <PostFormContainer currentUser={this.props.currentUser} initVal={this.post.body}
                        song={this.post.song} closeSongModal={this.closeModal}
                        postId={this.post.id} feedType={this.props.feedType}
                        fetchProfilePosts={this.props.fetchProfilePosts}
                        fetchPostsFromFollowers={this.props.fetchPostsFromFollowers}/>;
    } else {
      form = <PostShow song={this.post.song} closeModal={this.closeModal}
                       user={this.post.author}/>;
    }

    const bodyArr = this.post.body.split('\n');
    const body =
          bodyArr.map(
            (line, idx) => <div key={idx}>{line}<br /></div>
        );

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
            {body}
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
          {form}
        </Modal>
      </div>
    );
  }
}

export default PostFeedDashboardItem;
