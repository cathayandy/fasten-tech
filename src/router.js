import React from 'react';
import { Router, Route } from 'dva/router';
import Home from './routes/home/index.jsx';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Home} />
    </Router>
  );
}

export default RouterConfig;
