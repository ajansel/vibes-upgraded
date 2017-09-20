import React from 'react';
import SessionButtonsContainer from './session/session_buttons_container';

const App = (props) => {
  return (
    <div>
      <header className="NavBar">
        <h1>Welcome to vibes</h1>
        <SessionButtonsContainer />
      </header>
    </div>
  );
};

export default App;
