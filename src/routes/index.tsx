import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from './helper';
import Layout from '../shared/components/layout/';

export const Routes = () => {
  const routesRender = routes;

  return (
    <Switch>
      {routesRender.map((item, index) => (
        <Route key={index} exact path={item.path}>
          {item.path === '/login' || item.path === '/register' ? (
            <item.page />
          ) : (
            <Layout>
              <item.page />
            </Layout>
          )}
        </Route>
      ))}
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

