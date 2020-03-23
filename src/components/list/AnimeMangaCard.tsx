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
  const gridStyle = { width: '100%' };
  return (
    // <Link to={`/items/${mal_id}`}>
    <Card
      bordered={false}
      style={{ backgroundColor: '#FAFAFA', textAlign: 'center' }}
      title={title}
      extra={type}
      hoverable={true}
    >
      <Card.Grid style={gridStyle} hoverable={false}>
        Hello
        {/* <img alt="cover" src={image_url} style={{}} /> */}
      </Card.Grid>
      <Card.Grid style={gridStyle} hoverable={false}>
        Snynopsis
      </Card.Grid>
    </Card>
    // </Link>
  );
};
