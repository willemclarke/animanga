import React from 'react';
import _ from 'lodash';
import { Col, Row, Typography } from 'antd';
import {
  AnimeCharacter,
  AnimeScoreData,
  AnimeStaff,
  AnimeResponse,
  AnimeRecommendation,
} from '../../../api/api';
import { CharacterCard } from './Character';
import { StaffCard } from './Staff';
import { StatusDistribution } from './StatusDistribution';
import { AnimeStatistics } from './Stats';
import { RecommendationCard } from './Recommendations';

interface OverviewProps {
  characters: AnimeCharacter[];
  staff: AnimeStaff[];
  status: AnimeScoreData;
  score: AnimeResponse;
  votes: AnimeScoreData;
  recommendations: AnimeRecommendation[];
}

export const Overview = (props: OverviewProps) => {
  const { characters, staff, status, score, votes, recommendations } = props;

  const characterCols = _.map(_.take(characters, 6), (character) => {
    return (
      <Col xs={12} xxl={8}>
        <CharacterCard character={character} />
      </Col>
    );
  });

  const staffCols = _.map(_.take(staff, 3), (person) => {
    return (
      <Col xs={12} xxl={8}>
        <StaffCard staff={person} />
      </Col>
    );
  });

  const recommendationCols = _.map(_.take(recommendations, 7), (recommendation) => {
    return (
      <Col xs={2} xxl={3}>
        <RecommendationCard recommendation={recommendation} />
      </Col>
    );
  });

  return (
    <>
      <Typography.Title level={4}>
        General Info & Percentage of votes for scores 1-10
      </Typography.Title>

      <Row gutter={[16, 16]} justify="center">
        <AnimeStatistics score={score} votes={votes} />
      </Row>

      <Typography.Title level={4}>Characters</Typography.Title>
      <Row gutter={[16, 16]}>{characterCols}</Row>
      <br />

      <Typography.Title level={4}>Staff</Typography.Title>
      <Row gutter={[16, 16]}>{staffCols}</Row>
      <br />

      <Typography.Title level={4}>Status distribution</Typography.Title>
      <Row gutter={[16, 16]} justify="center">
        <StatusDistribution status={status} />
      </Row>

      <Typography.Title level={4}>Recommendations</Typography.Title>
      <Row gutter={[16, 16]}>{recommendationCols}</Row>
      <br />
    </>
  );
};
