import React from 'react';
import _ from 'lodash';
import { MangaCharacter } from '../../../api/api';
import { Col, Row, Card } from 'antd';

interface CharacterCardProps {
  image_url: string;
  name: string;
  role: string;
  url: string;
}

const CharacterCard = (props: CharacterCardProps) => {
  const { image_url, name, url, role } = props;

  return (
    <Card
      className="character"
      bordered={false}
      style={{
        display: 'inline-grid',
        gridTemplateColumns: '60px auto',
        height: '80px',
        width: '337.31px',
      }}
      bodyStyle={{
        height: '80px',
        width: '285.33px',
        padding: '5px',
        fontSize: '0.9rem',
        overflow: 'hidden',
      }}
      cover={
        <img alt="" src={image_url} style={{ height: '80px', width: '60px', gridArea: 'image' }} />
      }
    >
      <div style={{ gridArea: 'content', overflow: 'hidden' }}>
        <a href={url}>{name}</a>
        <div style={{ marginTop: '25px' }}>{role}</div>
      </div>
    </Card>
  );
};

interface CharacterProps {
  data: MangaCharacter[];
}

export const SixCharacters = (props: CharacterProps) => {
  const { data } = props;

  const slicedData = _.slice(data, 0, 6);
  const grouped = _.chunk(slicedData, 3);

  const rows = _.map(grouped, (items) => {
    const cols = _.map(items, (item, index) => {
      const { image_url, name, role, url } = item;
      return (
        <Col key={index}>
          <CharacterCard image_url={image_url} name={name} role={role} url={url} />
        </Col>
      );
    });
    return (
      <Row gutter={[40, 16]} justify="center">
        {cols}
      </Row>
    );
  });

  return (
    <div>
      <div>
        <h3>Characters</h3>
      </div>
      {rows}
    </div>
  );
};
