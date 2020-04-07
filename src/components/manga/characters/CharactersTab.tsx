import React from 'react';
import _ from 'lodash';
import { MangaCharacter } from '../../../api/api';
import { CharacterCard } from '../overview/Character';
import { Col, Row } from 'antd';

interface Props {
  characters: MangaCharacter[];
}

export const CharactersTab = (props: Props) => {
  const { characters } = props;

  const characterCols = _.map(characters, (character) => {
    return (
      <Col xs={12} xxl={8}>
        <CharacterCard character={character} />
      </Col>
    );
  });

  return (
    <>
      <Row gutter={[16, 16]} style={{ height: '100%' }}>
        {characterCols}
      </Row>
      <br />
    </>
  );
};
