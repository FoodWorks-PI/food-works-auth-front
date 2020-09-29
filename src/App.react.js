// @flow strict

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ThemeProvider, CssBaseline} from '@material-ui/core';

import SignInPage from 'components/sign_in/SignInPage.react';
import EmailLoginPage from 'components/sign_in/EmailLoginPage.react';
import SignUpPage from 'components/sign_in/SignUpPage.react';
import {theme} from 'shared/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/sign-in">
            <SignInPage name="Alfredo" />
          </Route>
          <Route path="/login">
            <EmailLoginPage />
          </Route>
          <Route path="/sign-up">
            <SignUpPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
