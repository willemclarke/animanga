import React from 'react';
import _ from 'lodash';
import { GeneralInformation } from './GeneralInformation';
import { AnimeResponse, AnimeCharacter, AnimeStaff, AnimeScoreData } from '../../api/api';
import { Col, Row, Card, Breadcrumb, Tabs } from 'antd';
import { Overview } from './overview/Overview';

const { TabPane } = Tabs;

interface Props {
  generalInformation: AnimeResponse;
  // Overview props:
  characters: AnimeCharacter[];
  staff: AnimeStaff[];
  status: AnimeScoreData;
}

export const AnimeTabSelector = (props: Props) => {
  const { generalInformation, characters, staff, status } = props;
  return (
    <Row justify="center" gutter={14} style={{ backgroundColor: 'EDF1F5', marginTop: '20px' }}>
      <GeneralInformation data={generalInformation} /> {/* Wrapped in Col span 3 */}
      <Col span={14}>
        <Card>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Overview" key="1">
              <Overview characters={characters} staff={staff} status={status} />
            </TabPane>
            <TabPane tab="Characters" key="2">
              Character Content
            </TabPane>
            <TabPane tab="Reviews" key="3">
              Review Content
            </TabPane>
          </Tabs>
        </Card>
      </Col>
    </Row>
  );
};
