import React from 'react';
import { Route } from 'react-router-dom';
import SessionButtonsContainer from './session/session_buttons_container';
import SessionFormContainer from './session/session_form_container';

const App = (props) => {
  return (
    <div>
      <header className="NavBar">
        <h1>Welcome to vibes</h1>
        <SessionButtonsContainer />
      </header>

      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
    </div>
  );
};

export default App;
