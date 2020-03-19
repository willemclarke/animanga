import { Layout } from 'antd';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimeMangaList } from './components/list/AnimeMangaList';
import { NavBar } from './components/nav/NavBar';
import { QueryParamProvider } from 'use-query-params';

export const App: React.FC = () => {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Layout>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <AnimeMangaList />
            </Route>
          </Switch>
        </Layout>
      </QueryParamProvider>
    </Router>
  );
};

export default App;
