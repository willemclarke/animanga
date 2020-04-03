import { Col, Row, Typography } from 'antd';
import _ from 'lodash';
import React from 'react';
import { AnimeCharacter, AnimeScoreData, AnimeStaff } from '../../../api/api';
import { CharacterCard } from './Character';
import { StaffCard } from './Staff';

interface OverviewProps {
  characters: AnimeCharacter[];
  staff: AnimeStaff[];
  status: AnimeScoreData;
}

export const Overview = (props: OverviewProps) => {
  const { characters, staff } = props;

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

  return (
    <>
      <Typography.Title level={4}>Characters</Typography.Title>
      <Row gutter={[16, 16]}>{characterCols}</Row>
      <br />

      <Typography.Title level={4}>Staff</Typography.Title>
      <Row gutter={[16, 16]}>{staffCols}</Row>
      <br />

      {/* <Typography.Title level={4}>Status distribution</Typography.Title>
      <Row gutter={[16, 16]}>{characterCols}</Row> */}
      <br />
    </>
  );
};
