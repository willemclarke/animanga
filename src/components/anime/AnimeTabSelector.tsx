import React from 'react';
import _ from 'lodash';
import { GeneralInformation } from './GeneralInformation';
import { AnimeResponse, AnimeCharacter, AnimeStaff, AnimeScoreData } from '../../api/api';
import { Col, Row, Card, Breadcrumb, Tabs } from 'antd';
import { Overview } from './overview/Overview';

const { TabPane } = Tabs;

interface Props {
  generalInformation: AnimeResponse;
  characters: AnimeCharacter[];
  staff: AnimeStaff[];
  status: AnimeScoreData;
}

export const AnimeTabSelector = (props: Props) => {
  const { generalInformation, characters, staff, status } = props;
  return (
    <Row justify="center" gutter={14} style={{ backgroundColor: 'EDF1F5', marginTop: '20px' }}>
      <Col span={3}>
        <GeneralInformation data={generalInformation} />
      </Col>
      <Col span={14}>
        <Tabs defaultActiveKey="overview">
          <TabPane tab="Overview" key="overview">
            <Overview characters={characters} staff={staff} status={status} />
          </TabPane>
          <TabPane tab="Characters" key="characters">
            Character Content
          </TabPane>
          <TabPane tab="Reviews" key="reviews">
            Review Content
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};
