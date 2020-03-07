import React from "react";
import * as _ from "lodash";

import { animeMangaInfo } from "./api/api";
import { Layout, Button } from "antd";
import { Row, Col, Input, Spin, Alert } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

// input onChange will set the title to specific anime title
// searchAnime, searchManga onClick will first setType to either anime/manga --> then perform fetchData command with type * title

interface TypeState {
  anime: string;
  manga: string;
}

export const App: React.FC = () => {
  const [title, setTtitle] = React.useState<string>("");
  const [type, setType] = React.useState<TypeState>({
    anime: "anime",
    manga: "manga"
  });

  return (
    <Layout>
      <Header style={{ fontSize: "2rem", color: "white" }}>animanga-info</Header>
      <Content>
        <Row style={{ justifyContent: "center" }}>
          <Input
            placeholder="Search anime/manga here"
            style={{ width: "300px" }}
            onChange={(event: React.FormEvent<HTMLInputElement>) => setTtitle(event.currentTarget.value)}
          />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => animeMangaInfo(type.anime, title)}
          >
            Search Anime
          </Button>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => animeMangaInfo(type.manga, title)}
          >
            Search Manga
          </Button>
        </Row>
        {/* input && search button here */}
        <Row style={{ height: "100%" }}>
          <Col span={8} style={{ backgroundColor: "red", height: "100%" }}>
            test
          </Col>
          <Col span={8} style={{ backgroundColor: "blue", height: "100%" }}>
            test
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default App;
