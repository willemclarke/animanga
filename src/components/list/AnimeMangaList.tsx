import React from "react";
import _ from "lodash";
import { AnimeAndMangaResponse } from "../../api/api";
import { AnimeMangaCard, AnimeMangaCardProps } from "./AnimeMangaCard";
import { Layout, Row, Col } from "antd";

const { Content } = Layout;

interface Props {
  data: AnimeAndMangaResponse[];
}

export const AnimeMangaList = (props: Props) => {
  const { data } = props;
  return (
    <Layout style={{ height: "100vh" }}>
      <Content>
        <Row justify="center">
          {_.map(data, (value, index) => {
            const { image_url, title, synopsis, mal_id } = value;
            if (index <= 2) {
              return (
                <Col span={5.25} style={{ padding: "35px 15px 15px 15px" }}>
                  <AnimeMangaCard title={title} image_url={image_url} synopsis={synopsis} key={mal_id} />
                </Col>
              );
            }
          })}
        </Row>
        <Row justify="center">
          {_.map(data, (value, index) => {
            const { image_url, title, synopsis, mal_id } = value;
            if (index > 2 && index <= 5) {
              return (
                <Col span={5.25} style={{ padding: "15px" }}>
                  <AnimeMangaCard image_url={image_url} title={title} synopsis={synopsis} key={mal_id} />
                </Col>
              );
            }
          })}
        </Row>
      </Content>
    </Layout>
  );
};
