import React from 'react';
import { Route, Switch, routerRedux, Redirect } from 'dva/router';
import PropTypes from 'prop-types';
import dynamic from 'dva/dynamic';
import notFound from '@/pages/notFound';

import roadList from './routes/index';


function Routers({ history, app }) {
  return (
    <routerRedux.ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/home" />)} />
        {
          roadList.map(({ path, ...dynamics }, key) => (
            <Route key={key}
              path={path}
              component={dynamic({
                app,
                ...dynamics,
              })}
            />
          ))
        }
        <Route component={notFound} />
      </Switch>
    </routerRedux.ConnectedRouter>
  );
}

Routers.propTypes = {
  history: PropTypes.object.isRequired,
  app: PropTypes.object.isRequired,
};

export default Routers;
