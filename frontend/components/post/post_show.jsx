import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    const lyricsArr = this.props.song.lyrics.split('\n');
    const lyrics =
          lyricsArr.map(
            (line, idx) => <div key={idx}>{line}<br /></div>
        );
    return (
      <div className="PostShow">
        <div className="UserInfo">
          <img src={this.props.user.img_url}/>
          <div className="UserNames">
            <p>{this.props.user.name}</p>
            <p>{"@" + this.props.user.username}</p>
          </div>
        </div>
        <p>{this.props.song.title}</p>
        <div className="Lyrics" onMouseUp={() => this.handleHighlight()}>
          {lyrics}
        </div>
      </div>
    );
  }
}

export default PostShow;
