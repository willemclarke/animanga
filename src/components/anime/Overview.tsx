import React from 'react';
import _ from 'lodash';
import { AnimeCharacters } from '../../api/api';
import { Col, Row, Card, Typography } from 'antd';

interface CharacterCardProps {
  image_url: string;
  name: string;
  role: string;
  url: string;
  voice_actors: [
    {
      name: string;
      url: string;
      image_url: string;
      language: string;
    },
  ];
}

interface Props {
  data: AnimeCharacters[];
}

export const CharacterStaffCard = (props: CharacterCardProps) => {
  const { image_url, name, role, url, voice_actors } = props;

  return (
    <div
      style={{
        height: '80px',
        display: 'inline-grid',
        gridTemplateColumns: '50% 50%',
        overflow: 'hidden',
      }}
    >
      <Card
        className="character"
        bordered={false}
        style={{
          display: 'inline-grid',
          gridTemplateColumns: '60px auto',
          gridTemplateAreas: 'image content',
          height: '80px',
          width: '168.66px',
        }}
        bodyStyle={{
          height: '80px',
          width: '108.66px',
          padding: '5px',
          fontSize: '0.9rem',
          overflow: 'hidden',
        }}
        cover={
          <img
            alt=""
            src={image_url}
            style={{ height: '80px', width: '60px', gridArea: 'image' }}
          />
        }
      >
        <div style={{ gridArea: 'content', overflow: 'hidden' }}>
          <a href={url}>{name}</a>
          <div>{role}</div>
        </div>
      </Card>
      <Card
        className="staff"
        bordered={false}
        style={{
          display: 'inline-grid',
          gridTemplateColumns: '60px auto',
          gridTemplateAreas: 'image content',
          height: '80px',
          width: '168.66px',
          transform: 'scaleX(-1)',
        }}
        bodyStyle={{
          height: '80px',
          width: '108.66px',
          padding: '5px',
          fontSize: '0.9rem',
          overflow: 'hidden',
        }}
        cover={
          <img
            alt=""
            src={voice_actors[0].image_url}
            style={{ height: '80px', width: '60px', gridArea: 'image' }}
          />
        }
      >
        <div style={{ gridArea: 'content', overflow: 'hidden', transform: 'scaleX(-1)' }}>
          <a href={voice_actors[0].url}>{voice_actors[0].name}</a>
          <div>{voice_actors[0].language}</div>
        </div>
      </Card>
    </div>
  );
};

export const OverviewCharacters = (props: Props) => {
  const { data } = props;

  const slicedData = _.slice(data, 0, 6);
  const grouped = _.chunk(slicedData, 3);

  const rows = _.map(grouped, (items) => {
    const cols = _.map(items, (item, index) => {
      const { image_url, name, role, url, voice_actors } = item;
      return (
        <Col key={index}>
          <CharacterStaffCard
            image_url={image_url}
            name={name}
            role={role}
            url={url}
            voice_actors={voice_actors}
          />
        </Col>
      );
    });
    return (
      <Row gutter={[24, 16]} justify="center">
        {cols}
      </Row>
    );
  });

  return (
    <Col span={14}>
      <div style={{ marginLeft: '20px' }}>
        <h3>Characters</h3>
      </div>
      {rows}
    </Col>
  );
};
