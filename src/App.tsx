import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimeMangaList } from './components/list/AnimeMangaList';
import { Anime } from './components/item/anime/Anime';
import { Manga } from './components/item/manga/Manga';
import { NavBar } from './components/nav/NavBar';
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
              <AnimeMangaList />
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
