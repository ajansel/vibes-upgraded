import React from 'react';
import { Link } from 'react-router-dom';
import MusicSearchContainer from '../music_search/music_search_container';
import UserSearchContainer from '../user_search/user_search_container';
import PostFeedDashboardContainer from '../post/post_feed_dashboard_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRandomAlbum();
  }

  render(){
    if (!this.props.albumOfTheDay) return null;
    return (
      <main className="PageContainer">
        <div className="Dashboard">
          <div className="UserWidget">
            <Link to={`/profile/${this.props.currentUser.id}`}><img className="DashboardPic" src={this.props.currentUser.img_url}/></Link>
            <Link to={`/profile/${this.props.currentUser.id}`}><p className="Name">{this.props.currentUser.name}</p>
            <p className="Name">{"@" + this.props.currentUser.username}</p></Link>
            <div className="StatHeaders">
              <p>Posts</p>
              <p>Followers</p>
              <p>Following</p>
            </div>
            <div className="Stats">
              <p>{this.props.currentUser.posts}</p>
              <p>{this.props.currentUser.followers}</p>
              <p>{this.props.currentUser.followees}</p>
            </div>
          </div>
          <div className="SearchAndFeed">
            <div className="MusicSearchDiv">
              <MusicSearchContainer />
            </div>
            <div className="Feed">
              <PostFeedDashboardContainer params={this.props.params}
                feedType={"dashboard"} />
            </div>
          </div>
          <div className="BonusWidget">
            <p className="SuggestedAlbum">Suggested Album</p>
            <img className="SuggestedAlbumPic" src={this.props.albumOfTheDay.img_url}/>
            <p className="SuggestedAlbumTitle">{this.props.albumOfTheDay.title}</p>
            <p className="SuggestedAlbumArtist">{this.props.albumOfTheDay.artist.name}</p>
          </div>
        </div>
      </main>
    );
  }
}

export default Dashboard;
