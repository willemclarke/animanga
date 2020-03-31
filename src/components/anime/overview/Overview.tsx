import React from 'react';
import _ from 'lodash';
import { GeneralInformation } from '../GeneralInformation';
import { SixCharacters } from './Characters';
import { StatusDistribution } from './StatusDistribution';
import { StaffList } from './Staff';
import { AnimeCharacter, AnimeScoreData, AnimeResponse, AnimeStaff } from '../../../api/api';
import { Col, Row } from 'antd';

interface OverviewProps {
  generalInformation: AnimeResponse;
  characters: AnimeCharacter[];
  staff: AnimeStaff[];
  status: AnimeScoreData;
}

export const Overview = (props: OverviewProps) => {
  const { generalInformation, characters, status, staff } = props;

  return (
    <Row gutter={[24, 16]} justify="center" style={{ marginTop: '20px' }}>
      <GeneralInformation data={generalInformation} />
      <Col span={14}>
        <Row gutter={[12, 12]} justify="center" style={{ width: '100%' }}>
          <SixCharacters data={characters} />
        </Row>
        <Row gutter={[12, 12]} justify="center" style={{ marginTop: '20px' }}>
          <StaffList data={staff} />
        </Row>
        <Row gutter={[12, 12]} justify="center" style={{ marginTop: '20px' }}>
          <StatusDistribution data={status} />
        </Row>
      </Col>
    </Row>
  );
};
