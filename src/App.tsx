import React from "react";
import * as _ from "lodash";

import { getAnimeManga, MediumType, AnimeAndManga } from "./api/api";
import { SearchBar } from "./components/SearchBar";
import { AnimeMangaCard } from "./components/AnimeMangaCard";

import { Layout } from "antd";
import { Row, Col } from "antd";

const { Header, Content } = Layout;

// input onChange will set the title to specific anime title
// searchAnime, searchManga onClick will first setType to either anime/manga --> then perform fetchData command with type * title

export const App: React.FC = () => {
  const [title, setTitle] = React.useState<string>("");
  const [data, setData] = React.useState<AnimeAndManga[]>([]);

  async function onClick(type: MediumType) {
    const result = await getAnimeManga(type, title);
    setData(result);
  }

  return (
    <Layout>
      <Header style={{ height: "130px", fontSize: "2rem", color: "white", justifyContent: "center" }}>
        animanga-info <SearchBar setTitle={setTitle} onClick={onClick} />
      </Header>
      <Content>
        {/* List of anime/manga cards*/}
        <Row style={{ height: "100%", justifyContent: "center" }}>
          <Col span={8} style={{ backgroundColor: "red", height: "100%" }}>
            {_.map(data, (value, index) => {
              const { image_url, title, score } = value;
              return <AnimeMangaCard image_url={image_url} title={title} score={score} key={index} />;
            })}
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default App;
