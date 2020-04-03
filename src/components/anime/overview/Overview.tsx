import { Col, Row, Typography } from 'antd';
import _ from 'lodash';
import React from 'react';
import { AnimeCharacter, AnimeScoreData, AnimeStaff } from '../../../api/api';
import { CharacterCard } from './Character';

interface OverviewProps {
  characters: AnimeCharacter[];
  staff: AnimeStaff[];
  status: AnimeScoreData;
}

export const Overview = (props: OverviewProps) => {
  const { characters, status, staff } = props;

  const characterCols = _.map(_.take(characters, 6), (character) => {
    return (
      <Col xs={12} xxl={8}>
        <CharacterCard character={character} />
      </Col>
    );
  });

  return (
    <>
      <Typography.Title level={4}>Characters</Typography.Title>
      <Row gutter={[16, 16]}>{characterCols}</Row>
      <br />

      <Typography.Title level={4}>Staff</Typography.Title>
      <Row gutter={[16, 16]}>{characterCols}</Row>
      <br />

      <Typography.Title level={4}>Status distribution</Typography.Title>
      <Row gutter={[16, 16]}>{characterCols}</Row>
      <br />
    </>
  );
};
