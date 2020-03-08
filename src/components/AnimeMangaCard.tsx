import React from "react";

import { Card } from "antd";

const { Meta } = Card;

interface Props {
  image_url: string;
  title: string;
  score: number;
}

export const AnimeMangaCard = (props: Props): JSX.Element => {
  const { image_url, title, score } = props;
  return (
    <Card hoverable style={{ width: "240" }} cover={<img alt="cover" src={image_url} />}>
      <Meta title={title} description={score} />
    </Card>
  );
};
