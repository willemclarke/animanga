import React from 'react';
import _ from 'lodash';
import { AnimeScoreData, AnimeResponse } from '../../../api/api';
import { Col, Row, Statistic, Typography, Divider } from 'antd';
import { Sparklines, SparklinesBars, SparklinesLine } from 'react-sparklines';
import { StarFilled, NumberOutlined } from '@ant-design/icons';

interface Props {
  score: AnimeResponse;
  votes: AnimeScoreData;
}

export const AnimeStatistics = (props: Props) => {
  const { score, votes } = props;

  const scoreData = _.map(votes.scores, (score) => {
    return score.percentage;
  });

  const scoreChart = (
    <Sparklines data={scoreData}>
      <SparklinesBars style={{ stroke: 'white', fill: '#41c3f9', fillOpacity: 0.25 }} />
      <SparklinesLine style={{ stroke: '#41c3f9', fill: 'none' }} />
    </Sparklines>
  );

  return (
    <>
      <Col span={24}>
        <Typography.Title level={4}>
          General Info & Percentage of votes for scores 1-10
        </Typography.Title>

        <Row
          gutter={[10, 10]}
          justify="space-around"
          align="middle"
          style={{ textAlign: 'center', backgroundColor: 'white' }}
        >
          <Col xs={2.5} xxl={3}>
            <Statistic
              title="Score"
              value={score.score}
              prefix={<StarFilled style={{ color: '#F6AB24' }} />}
            />
          </Col>
          <Col xs={2.5} xxl={3}>
            <Statistic title="Ranked" value={score.rank} prefix={<NumberOutlined />} />
          </Col>
          <Col xs={2.5} xxl={3}>
            <Statistic title="Popularity" value={score.popularity} prefix={<NumberOutlined />} />
          </Col>
          <Col xs={2.5} xxl={3}>
            <Statistic title="Members" value={score.members} />
          </Col>
          <Col span={10}>{scoreChart}</Col>
        </Row>
      </Col>
    </>
  );
};
