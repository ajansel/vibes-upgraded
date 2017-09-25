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
          <Link to={`/profile/${this.props.user.id}`}><img src={this.props.user.img_url}/></Link>
          <div className="UserNames">
            <Link to={`/profile/${this.props.user.id}`}><p>{this.props.user.name}</p>
            <p>{"@" + this.props.user.username}</p></Link>
          </div>
        </div>
        <p>{this.props.song.title}</p>
        <div className="Lyrics" >
          {lyrics}
        </div>
      </div>
    );
  }
}

export default PostShow;
