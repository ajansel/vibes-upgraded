import React from 'react';
import { Link } from 'react-router-dom';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    let initVal;
    if (this.props.initVal) {
      initVal = this.props.initVal;
    } else {
      initVal = "";
    }
    this.postId = this.props.postId;
    this.state = {body: this.props.initVal};
    this.handleClick = this.handleClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentWillUnmount(newprops){
    this.props.receivePostErrors();
  }

  handleClick(e) {
    e.preventDefault();

    const post = {
      id: this.postId,
      body: this.state.body,
      song_id: this.props.song.id,
      author_id: this.props.currentUser.id
    };

    if (this.postId) {
      this.props.updatePost(post)
                .then((response) => {
                  if (response.type !== 'RECEIVE_POST_ERRORS') {
                    // this.props.closeSongModal();
                    if (this.props.feedType === 'dashboard'){
                      this.props.fetchPostsFromFollowers();
                    } else if (this.props.feedType === 'profile'){
                      this.props.fetchProfilePosts(this.props.userId);
                    }
                  }
                });
    } else {
      this.props.createPost(post, this.props.currentUser.id)
                .then((response) => {
                  if (response.type !== 'RECEIVE_POST_ERRORS') {
                    this.props.closeSongModal();
                    if (this.props.feedType === 'dashboard'){
                      this.props.fetchPostsFromFollowers();
                    } else if (this.props.feedType === 'profile'){
                      this.props.fetchProfilePosts(this.props.userId);
                    }
                    this.props.clearState();
                  }
                });
    }
  }

  handleDeleteClick(e) {
    e.preventDefault();

    this.props.deletePost(this.postId, this.props.currentUser.id)
              .then(this.props.closeSongModal()).then(
                () => {
                  if (this.props.feedType === 'dashboard'){
                    this.props.fetchPostsFromFollowers();
                  } else if (this.props.feedType === 'profile'){
                    this.props.fetchProfilePosts(this.props.userId);
                  }
                }
              );
  }

  handleHighlight() {
    if (window.getSelection().toString() !== "") {
      const body = window.getSelection().toString();
      this.setState({body});
    }
  }

  render(){
    const lyricsArr = this.props.song.lyrics.split('\n');
    const lyrics =
          lyricsArr.map(
            (line, idx) => <div key={idx}>{line}<br /></div>
        );

    let deleteButton;
    if (this.postId) {
      deleteButton = <button className="DeletePost" onClick={this.handleDeleteClick}>Delete</button>;

    }

    const renderErrors =
      <ul className="ErrorsListPostForm">
          {this.props.errors.map(
            (err) => (<li key={err}>{err}</li>)
          )}
      </ul>;


    return (
      <div className="PostForm ignore-react-onclickoutside">
        <div className="UserInfo">
          <Link to={`/profile/${this.props.currentUser.id}`}><img src={this.props.currentUser.img_url}/></Link>
          <div className="UserNames">
            <Link to={`/profile/${this.props.currentUser.id}`}><p>{this.props.currentUser.name}</p>
            <p>{"@" + this.props.currentUser.username}</p></Link>
          </div>
        </div>

        <h3>{this.props.song.title}</h3>
        {renderErrors}
        <label className="PostBody">
          <textarea disabled="yes" type="text"
            placeholder="Highlight lyrics below to fill the body of your post"
            value={this.state.body}/>
          <br />
          <br />
        </label>
        <button className="PostPost" onClick={this.handleClick}>Post</button>
        {deleteButton}
        <div className="Lyrics" onMouseUp={() => this.handleHighlight()}>
          {lyrics}
        </div>
      </div>
    );
  }
}

export default PostForm;
