import React from 'react';
import { Link } from 'react-router-dom';
import MusicSearchContainer from '../music_search/music_search_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="Dashboard">
        <div className="UserWidget">
          <img className="DashboardPic" src={this.props.currentUser.img_url}/>
          <p className="Name">{this.props.currentUser.name}</p>
          <p className="Name">{"@" + this.props.currentUser.username}</p>
          <div className="StatHeaders">
            <p>Posts</p>
            <p>Followers</p>
            <p>Following</p>
          </div>
          <div className="Stats">
            <p>30</p>
            <p>406</p>
            <p>384</p>
          </div>
        </div>
        <div className="SearchAndFeed">
          <div className="MusicSearch">
            <MusicSearchContainer />
          </div>
          <div className="Feed">
            <p>Test Feed</p>
          </div>
        </div>
        <div className="BonusWidget">
          <p>Test Bonus widget</p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
