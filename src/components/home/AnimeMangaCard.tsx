import React from 'react';
import _ from 'lodash';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

export interface AnimeMangaCardProps {
  title: string;
  image_url: string;
  synopsis: string;
  type: string;
  mal_id: number;
}

function getItemUrl(type: string, mal_id: number): string {
  const animeTypes = ['TV', 'Movie', 'OVA', 'ONA'];
  if (_.includes(animeTypes, type)) {
    return `/anime/${mal_id}`;
  } else {
    return `/manga/${mal_id}`;
  }
}

export const AnimeMangaCard = (props: AnimeMangaCardProps): JSX.Element => {
  const { image_url, title, synopsis, type, mal_id } = props;

  return (
    <Link to={getItemUrl(type, mal_id)}>
      <Card
        hoverable
        title={title}
        cover={<img alt="" src={image_url} style={{ height: '287px', width: '100%' }} />}
        extra={type}
      >
        <Card.Meta title={title} description={synopsis} />
      </Card>
    </Link>
  );
};
