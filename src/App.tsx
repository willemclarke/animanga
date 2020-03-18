import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import _ from "lodash";

import { NavBar } from "./components/nav/NavBar";
import { AnimeMangaList } from "./components/list/AnimeMangaList";
import { getAnimeManga, MediumType, AnimeAndMangaResponse } from "./api/api";
import { Layout } from "antd";

export const App: React.FC = () => {
  const [title, setTitle] = React.useState<string>("");
  const [data, setData] = React.useState<AnimeAndMangaResponse[]>([]);

  async function searchTitle(type: MediumType) {
    const result = await getAnimeManga(type, title);
    setData(result);
  }

  return (
    <Router>
      <Layout>
        <NavBar setTitle={setTitle} searchTitle={searchTitle} />
        <Switch>
          <Route exact path="/">
            <AnimeMangaList data={data}></AnimeMangaList>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
