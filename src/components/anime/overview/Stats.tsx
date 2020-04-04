import React from 'react';
import _ from 'lodash';
import { AnimeScoreData, AnimeResponse } from '../../../api/api';
import { Col, Row, Statistic } from 'antd';
import { PercentageOutlined, StarFilled, NumberOutlined } from '@ant-design/icons';

interface Props {
  score: AnimeResponse;
  votes: AnimeScoreData;
}

export const AnimeStatistics = (props: Props) => {
  const { score, votes } = props;

  const test = _.map(votes.scores, (value, key) => {
    // const scoreKey = Object.keys(votes.scores);
    return (
      <Col>
        <Statistic title={`${key}`} value={value.percentage} suffix="%" />
      </Col>
    );
  });

  return (
    <>
      <Col xs={11} xxl={12}>
        <Row
          gutter={[10, 10]}
          justify="space-around"
          align="middle"
          style={{ backgroundColor: 'white', textAlign: 'center' }}
        >
          <Col span={4}>
            <Statistic
              title="Score"
              value={score.score}
              prefix={<StarFilled style={{ color: '#F6AB24' }} />}
            />
          </Col>
          <Col span={4}>
            <Statistic title="Ranked" value={score.rank} prefix={<NumberOutlined />} />
          </Col>
          <Col span={4}>
            <Statistic title="Popularity" value={score.popularity} prefix={<NumberOutlined />} />
          </Col>
          <Col span={4}>
            <Statistic title="Members" value={score.members} />
          </Col>
        </Row>
      </Col>
      <Col xs={11} xxl={12}>
        <Row
          gutter={[10, 10]}
          justify="space-around"
          align="middle"
          style={{ backgroundColor: 'white', textAlign: 'center' }}
        >
          {test}
        </Row>
      </Col>
    </>
  );
};
