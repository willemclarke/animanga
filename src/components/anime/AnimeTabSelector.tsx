import React from 'react';
import _ from 'lodash';
import { GeneralInformation } from './GeneralInformation';
import { Col, Row, Tabs } from 'antd';
import { Overview } from './overview/Overview';
import { CharactersTab } from './characters/CharactersTab';
import { ReviewList } from './reviews/ReviewList';
import {
  AnimeResponse,
  AnimeCharacter,
  AnimeStaff,
  AnimeScoreData,
  AnimeReview,
} from '../../api/api';

const { TabPane } = Tabs;

interface Props {
  generalInformation: AnimeResponse;
  characters: AnimeCharacter[];
  staff: AnimeStaff[];
  status: AnimeScoreData;
  score: AnimeResponse;
  votes: AnimeScoreData;
  reviews: AnimeReview[];
}

export const AnimeTabSelector = (props: Props) => {
  const { generalInformation, characters, staff, status, score, votes, reviews } = props;
  return (
    <Row justify="center" gutter={14} style={{ backgroundColor: 'EDF1F5', marginTop: '20px' }}>
      <Col span={3}>
        <GeneralInformation data={generalInformation} />
      </Col>
      <Col span={14}>
        <Tabs defaultActiveKey="overview">
          <TabPane tab="Overview" key="overview">
            <Overview
              characters={characters}
              staff={staff}
              status={status}
              score={score}
              votes={votes}
            />
          </TabPane>
          <TabPane tab="Characters" key="characters">
            <CharactersTab characters={characters} />
          </TabPane>
          <TabPane tab="Reviews" key="reviews">
            <ReviewList reviews={reviews} />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};
