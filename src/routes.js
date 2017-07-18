import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';

const componentRoutes = (
  <Route path='/' components={ App }>
    <IndexRoute components={ Home }/>
  </Route>
);

const Routes = () => {
  return <Router history={ browserHistory } routes={ componentRoutes } />
};

export default Routes;