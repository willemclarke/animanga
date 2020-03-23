import React from 'react';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

export interface AnimeMangaCardProps {
  title: string;
  image_url: string;
  synopsis: string;
  type: string;
  mal_id: number;
}

export const AnimeMangaCard = (props: AnimeMangaCardProps): JSX.Element => {
  const { image_url, title, synopsis, type, mal_id } = props;
  return (
    <Link to={`/items/${mal_id}`}>
      <Card
        hoverable
        title={title}
        cover={<img alt="cover" src={image_url} style={{ width: '100%' }} />}
        extra={type}
      >
        <Card.Meta title="Europe Street beat" description={synopsis} />
      </Card>
    </Link>
  );
};
