import React from "react";
import * as _ from "lodash";

import { getAnimeManga, MediumType, AnimeAndManga } from "./api/api";
import { SearchBar } from "./components/SearchBar";
import { AnimeMangaCard } from "./components/AnimeMangaCard";

import { Layout } from "antd";
import { Row, Col } from "antd";

const { Header, Content } = Layout;

export const App: React.FC = () => {
  const [title, setTitle] = React.useState<string>("");
  const [data, setData] = React.useState<AnimeAndManga[]>([]);

  async function onClick(type: MediumType) {
    const result = await getAnimeManga(type, title);
    setData(result);
  }

  return (
    <Layout>
      <Header style={{ height: "80px", fontSize: "2rem", color: "white" }}>
        <span style={{ paddingTop: "5px", paddingRight: "30px" }}>animanga-info</span>
        <SearchBar setTitle={setTitle} onClick={onClick} />
      </Header>
      <Content>
        {/* List of anime/manga cards*/}
        <Row style={{ height: "100%", justifyContent: "center" }}>
          {_.map(data, (value, index) => {
            const { image_url, title, score } = value;
            if (index <= 2) {
              return (
                <Col style={{ padding: "15px" }}>
                  <AnimeMangaCard image_url={image_url} title={title} score={score} key={index} />
                </Col>
              );
            }
          })}
        </Row>
        <Row style={{ height: "100%", justifyContent: "center" }}>
          {_.map(data, (value, index) => {
            const { image_url, title, score } = value;
            if (index > 2 && index <= 5) {
              return (
                <Col style={{ padding: "15px" }}>
                  <AnimeMangaCard image_url={image_url} title={title} score={score} key={index} />
                </Col>
              );
            }
          })}
        </Row>
      </Content>
    </Layout>
  );
};

export default App;
