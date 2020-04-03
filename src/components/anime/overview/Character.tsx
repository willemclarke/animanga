import React from 'react';
import { AnimeCharacter } from '../../../api/api';
import { Col, Row, Typography } from 'antd';

interface Props {
  character: AnimeCharacter;
}

export const CharacterCard = (props: Props) => {
  const { character } = props;

  const unknownActor = {
    name: 'Unknown',
    language: 'Unknown',
    image_url: 'https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg',
  };

  const actor = character.voice_actors[0] ? character.voice_actors[0] : unknownActor;

  return (
    <div style={{ display: 'flex', backgroundColor: 'white' }}>
      <div style={{ width: '60px', flex: '0 0 60px' }}>
        <img src={character.image_url} height={80} width={60} />
      </div>
      <div style={{ flex: '1', padding: '5px' }}>
        <Row>
          <Col span={12}>
            <Typography.Text strong>{character.name}</Typography.Text>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Typography.Text strong>{actor.name}</Typography.Text>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Typography.Text type="secondary">{character.role}</Typography.Text>
          </Col>
          <Col span={12} style={{ textAlign: 'right' }}>
            <Typography.Text type="secondary">{actor.language}</Typography.Text>
          </Col>
        </Row>
      </div>
      <div style={{ width: '60px', flex: '0 0 60px' }}>
        <img src={actor.image_url} height={80} width={60} />
      </div>
    </div>
  );
};
