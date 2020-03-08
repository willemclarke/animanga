import React from "react";

import { Card, Col, Row } from "antd";

const { Meta } = Card;

interface Props {
  image_url: string;
  title: string;
  score: number;
}

const gridStyle = {
  width: "25%",
  texAlign: "center"
};

export const AnimeMangaCard = (props: Props): JSX.Element => {
  const { image_url, title, score } = props;
  return (
    <Card
      hoverable
      style={{ width: "225px", height: "330px" }}
      cover={<img alt="cover" src={image_url} style={{ width: "225", height: "250px" }} />}
    >
      <Meta title={title} description={score} />
    </Card>
  );
};
