import React from 'react';
import _ from 'lodash';
import { SixCharacters } from './Characters';
import { StatusDistribution } from './StatusDistribution';
import { StaffList } from './Staff';
import { AnimeCharacter, AnimeScoreData, AnimeStaff } from '../../../api/api';
import { Col, Row, Layout } from 'antd';

interface OverviewProps {
  characters: AnimeCharacter[];
  staff: AnimeStaff[];
  status: AnimeScoreData;
}

const { Content } = Layout;

export const Overview = (props: OverviewProps) => {
  const { characters, status, staff } = props;

  return (
    <Content>
      <Row gutter={[24, 16]} justify="center" style={{ marginTop: '20px' }}>
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
    </Content>
  );
};
