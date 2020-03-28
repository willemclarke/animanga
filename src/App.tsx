import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Anime } from './pages/Anime';
import { Manga } from './pages/Manga';
import { NavBar } from './components/NavBar';
import { QueryParamProvider } from 'use-query-params';
import { Layout } from 'antd';

export const App: React.FC = () => {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Layout>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/anime/:id">
              <Anime />
            </Route>
            <Route path="/manga/:id">
              <Manga />
            </Route>
          </Switch>
        </Layout>
      </QueryParamProvider>
    </Router>
  );
};

export default App;
