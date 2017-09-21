import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="Dashboard">
        <div className="UserWidget">
          <p>Test User widget</p>
        </div>
        <div className="SearchAndFeed">
          <div className="MusicSearch">
            <p>Test Music Search</p>
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
