import React from "react";
import * as _ from "lodash";

import { getAnimeManga, MediumType, AnimeAndManga } from "./api/api";
import { AnimeMangaCard } from "./components/AnimeMangaCard";

import { Layout, Button } from "antd";
import { Row, Col, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

// input onChange will set the title to specific anime title
// searchAnime, searchManga onClick will first setType to either anime/manga --> then perform fetchData command with type * title

export const App: React.FC = () => {
  const [title, setTtitle] = React.useState<string>("");
  const [data, setData] = React.useState<AnimeAndManga[]>([]);

  async function onClick(type: MediumType) {
    const result = await getAnimeManga(type, title);
    setData(result);
  }

  return (
    <Layout>
      <Header style={{ fontSize: "2rem", color: "white" }}>animanga-info</Header>
      <Content>
        {/* Input bar and search buttons*/}
        <Row style={{ justifyContent: "center" }}>
          <Input
            placeholder="Search anime/manga here"
            style={{ width: "300px" }}
            onChange={(event: React.FormEvent<HTMLInputElement>) => setTtitle(event.currentTarget.value)}
          />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => onClick(MediumType.anime)}
          >
            Search Anime
          </Button>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => onClick(MediumType.manga)}
          >
            Search Manga
          </Button>
        </Row>
        {/* List of anime/manga cards*/}
        <Row style={{ height: "100%", justifyContent: "center" }}>
          <Col span={8} style={{ backgroundColor: "red", height: "100%" }}>
            {_.map(data, (value, index) => {
              console.log(data);
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
