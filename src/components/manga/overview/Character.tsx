import React from 'react';
import _ from 'lodash';
import { MangaCharacter } from '../../../api/api';
import { Col, Row, Typography } from 'antd';

interface Props {
  character: MangaCharacter;
}

export const CharacterCard = (props: Props) => {
  const { character } = props;

  return (
    <div style={{ display: 'flex', backgroundColor: 'white' }}>
      <div style={{ width: '60px', flex: '0 0 60px' }}>
        <img src={character.image_url} height={80} width={60} />
      </div>
      <div style={{ flex: '1', padding: '5px' }}>
        <Row>
          <Col span={12}>
            <Typography.Text strong>
              <a href={character.url} style={{ color: '#595959' }}>
                {character.name}
              </a>
            </Typography.Text>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Typography.Text type="secondary">{character.role}</Typography.Text>
          </Col>
        </Row>
      </div>
    </div>
  );
};
