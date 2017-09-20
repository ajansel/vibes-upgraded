import React from 'react';
import { Route } from 'react-router-dom';
import SessionButtonsContainer from './session/session_buttons_container';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute } from '../util/route_util';

const App = (props) => {
  return (
    <div className="EntirePageBody">
      <header className="NavBar">
        <div className="NavBarContent">
          <h1 className="HeaderLogo">Vibes (Logo)</h1>
          <SessionButtonsContainer />
        </div>
      </header>
      <main className="PageContainer">
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </main>
    </div>
  );
};

export default App;
