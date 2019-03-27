import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '@containers/app';
import Piwik from '@utils/Piwik';
import login from './login';
import volunteer from './volunteer';

export default (app) => {
  // const piwik = app._store.getState().app.piwik;
  // if (piwik) {
  //   window.piwik = new Piwik({ piwik, trackName: '债券深度详情' });
  // }
  return (
    <Router history={app._history}>
      <Switch>
      {/*<Route path='/login' exact component={login} />*/}
        <Route path='/' component={props => (
          <App {...props}>
            <Route path='/volunteer' exact component={volunteer} />
          </App>
        )} />
      </Switch>
    </Router>
  );
}
