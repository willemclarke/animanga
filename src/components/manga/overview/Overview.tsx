import React from 'react';
import _ from 'lodash';
import { CharacterCard } from './Character';
import { StatusDistribution } from './StatusDistribution';
import { MangaStatistics } from './Stats';
import { MangaCharacter, MangaScoreData, MangaResponse } from '../../../api/api';
import { Col, Row, Typography } from 'antd';

interface OverviewProps {
  characters: MangaCharacter[];
  status: MangaScoreData;
  score: MangaResponse;
  votes: MangaScoreData;
}

export const Overview = (props: OverviewProps) => {
  const { characters, status, score, votes } = props;

  const characterCols = _.map(_.take(characters, 6), (character) => {
    return (
      <Col xs={12} xxl={8}>
        <CharacterCard character={character} />
      </Col>
    );
  });

  return (
    <>
      <Row gutter={[16, 16]} justify="center">
        <MangaStatistics score={score} votes={votes} />
      </Row>

      <Typography.Title level={4}>Characters</Typography.Title>
      <Row gutter={[16, 16]}>{characterCols}</Row>
      <br />

      <Typography.Title level={4}>Status Distribution</Typography.Title>
      <Row gutter={[16, 16]}>
        <StatusDistribution status={status} />
      </Row>
      <br />
    </>
  );
};
