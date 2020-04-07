import React from 'react';
import _ from 'lodash';
import { GeneralInformation } from './GeneralInformation';
import { MangaResponse, MangaCharacter, MangaScoreData, MangaReview } from '../../api/api';
import { Col, Row, Tabs } from 'antd';
import { Overview } from './overview/Overview';

const { TabPane } = Tabs;

interface Props {
  generalInformation: MangaResponse;
  characters: MangaCharacter[];
  status: MangaScoreData;
  score: MangaResponse;
  votes: MangaScoreData;
  reviews: MangaReview[];
}

export const MangaTabSelector = (props: Props) => {
  const { generalInformation, characters, status, score, votes, reviews } = props;

  return (
    <Row justify="center" gutter={14} style={{ backgroundColor: 'EDF1F5', marginTop: '20px' }}>
      <Col span={3}>
        <GeneralInformation data={generalInformation} />
      </Col>
      <Col span={14}>
        <Tabs defaultActiveKey="overview">
          <TabPane tab="Overview" key="overview">
            <Overview characters={characters} status={status} score={score} votes={votes} />
          </TabPane>
          <TabPane tab="Characters" key="characters">
            PLACEHOLDER
          </TabPane>
          <TabPane tab="Reviews" key="reviews">
            PLACEHOLDER
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};
