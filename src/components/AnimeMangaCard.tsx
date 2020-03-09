import React from "react";

import { Card, Col, Row } from "antd";

const { Meta } = Card;

interface Props {
  image_url: string;
  title: string;
  // score: number;
  synopsis: string;
  // type: string;
}

export const AnimeMangaCard = (props: Props): JSX.Element => {
  const { image_url, title, synopsis } = props;
  return (
    <Card bordered={false} style={{ height: "100%", width: "406px", backgroundColor: "#FAFAFA" }} title={title}>
      <Card.Grid style={{ width: "100%", textAlign: "center" }} hoverable={false}>
        <img alt="cover" src={image_url} style={{ width: "185px" }} />
      </Card.Grid>
      <Card.Grid style={{ width: "100%", textAlign: "center" }} hoverable={false}>
        {synopsis}
      </Card.Grid>
    </Card>
  );
};
