import React from "react";
import { Card, Col, Row } from "antd";

export interface AnimeMangaCardProps {
  title: string;
  image_url: string;
  synopsis: string;
}

export const AnimeMangaCard = (props: AnimeMangaCardProps): JSX.Element => {
  const { image_url, title, synopsis } = props;
  return (
    <Card
      bordered={false}
      style={{ height: "100%", width: "406px", backgroundColor: "#FAFAFA" }}
      title={title}
      hoverable={true}
      // onClick={() => alert("Hello from here")} onClick functionality works, need a function now
    >
      <Card.Grid style={{ width: "100%", textAlign: "center" }} hoverable={false}>
        <img alt="cover" src={image_url} style={{ width: "185px" }} />
      </Card.Grid>
      <Card.Grid style={{ width: "100%", textAlign: "center" }} hoverable={false}>
        {synopsis}
      </Card.Grid>
    </Card>
  );
};
