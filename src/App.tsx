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
      <Header style={{ height: "55px", fontSize: "1.5rem", backgroundColor: "#1F2631", color: "white", paddingBottom: "25.5px" }}>
        <span style={{ paddingTop: "5px", paddingRight: "15px" }}>animanga-info</span>
        <SearchBar setTitle={setTitle} onClick={onClick} />
      </Header>
      <Content style={{ height: "100vh", backgroundColor: "#EDF1F5" }}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
          {_.map(data, (value, index) => {
            const { image_url, title, synopsis } = value;
            if (index <= 2) {
              return (
                <Col span={5.25} style={{ padding: "35px 15px 15px 15px" }}>
                  <AnimeMangaCard image_url={image_url} title={title} synopsis={synopsis} key={index} />
                </Col>
              );
            }
          })}
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
          {_.map(data, (value, index) => {
            const { image_url, title, synopsis } = value;
            if (index > 2 && index <= 5) {
              return (
                <Col span={5.25} style={{ padding: "15px" }}>
                  <AnimeMangaCard image_url={image_url} title={title} synopsis={synopsis} key={index} />
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
