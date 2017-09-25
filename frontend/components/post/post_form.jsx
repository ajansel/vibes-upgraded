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

  handleClick(e) {
    e.preventDefault();

    const post = {
      id: this.postId,
      body: this.state.body,
      song_id: this.props.song.id,
      author_id: this.props.currentUser.id
    };

    if (this.postId) {
      this.props.updatePost(post).then(this.props.closeSongModal());
    } else {
      this.props.createPost(post).then(this.props.closeSongModal());
    }
  }

  handleDeleteClick(e) {
    e.preventDefault();

    this.props.deletePost(this.postId).then(this.props.closeSongModal());
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

    return (
      <div className="PostForm">
        <div className="UserInfo">
          <Link to={`/profile/${this.props.currentUser.id}`}><img src={this.props.currentUser.img_url}/></Link>
          <div className="UserNames">
            <Link to={`/profile/${this.props.currentUser.id}`}><p>{this.props.currentUser.name}</p>
            <p>{"@" + this.props.currentUser.username}</p></Link>
          </div>
        </div>

        <label className="PostBody">
          <textarea disabled="yes" type="text"
            placeholder="Highlight lyrics below to fill the body of your post"
            value={this.state.body}/>
          <br />
          <br />
        </label>
        <button className="PostPost" onClick={this.handleClick}>Post</button>
        {deleteButton}
        <p>{this.props.song.title}</p>
        <div className="Lyrics" onMouseUp={() => this.handleHighlight()}>
          {lyrics}
        </div>
      </div>
    );
  }
}

export default PostForm;
