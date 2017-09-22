import React from 'react';
import { Link } from 'react-router-dom';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {body: ""};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log("Time to make form post action");
  }

  handleHighlight() {
    if (window.getSelection().toString() !== "") {
      const body = window.getSelection().toString();
      this.setState({body});
    }
  }

  render(){
    const lyricsArr = this.props.song.lyrics.split('\n');
    const div =
          lyricsArr.map(
            (line, idx) => <div key={idx}>{line}<br /></div>
        );
    return (
      <div className="PostForm">
        <div className="UserInfo">
          <img src={this.props.currentUser.img_url}/>
          <div className="UserNames">
            <p>{this.props.currentUser.name}</p>
            <p>{"@" + this.props.currentUser.username}</p>
          </div>
        </div>

        <label className="PostBody">
          <textarea type="text"
            placeholder="Highlight lyrics below to fill the body of your post"
            value={this.state.body}/>
          <br />
          <br />
        </label>
        <button onClick={this.handleClick}>Post</button>

        <p>{this.props.song.title}</p>
        <div className="Lyrics" onMouseUp={() => this.handleHighlight()}>
          {div}
        </div>
      </div>
    );
  }
}

export default PostForm;
