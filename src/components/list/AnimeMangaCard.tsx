import React from 'react';
import { Card, Col, Row } from 'antd';

export interface AnimeMangaCardProps {
  title: string;
  image_url: string;
  synopsis: string;
  type: string;
}

export const AnimeMangaCard = (props: AnimeMangaCardProps): JSX.Element => {
  const { image_url, title, synopsis, type } = props;
  return (
    <Card
      bordered={false}
      style={{ height: '100%', width: '300px', backgroundColor: '#FAFAFA', textAlign: 'center' }}
      title={title}
      hoverable={true}
      // onClick={() => alert("Hello from here")} onClick functionality works, need a function now
    >
      <Card.Grid style={{ width: '100%', maxHeight: '10px', border: 'false' }} hoverable={false}>
        <span>{type}</span>
      </Card.Grid>
      <Card.Grid style={{ width: '100%' }} hoverable={false}>
        <img alt="cover" src={image_url} style={{ width: '185px', height: '260px' }} />
      </Card.Grid>
      <Card.Grid style={{ width: '100%', height: '180px' }} hoverable={false}>
        {synopsis}
      </Card.Grid>
    </Card>
  );
};
