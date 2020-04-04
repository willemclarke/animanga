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

// const test = _.map(votes.scores, (value, key) => {
//   return (
//     <Col>
//       <Statistic title={`${key}`} value={value.percentage} suffix="%" />
//     </Col>
//   );
// });

export const AnimeStatistics = (props: Props) => {
  const { score, votes } = props;

  const data = _.map(votes.scores, (score) => {
    return score.percentage;
  });

  const chart = (
    <Sparklines data={data}>
      <SparklinesBars style={{ stroke: 'white', fill: '#41c3f9', fillOpacity: 0.25 }} />
      <SparklinesLine style={{ stroke: '#41c3f9', fill: 'none' }} />
    </Sparklines>
  );

  return (
    <>
      <Col xs={22} xxl={24}>
        <Typography.Title level={4}>Score Info</Typography.Title>
        <Divider type="vertical" style={{ margin: '2px' }}></Divider>{' '}
        <Typography.Title level={4}>Percentage of Votes for scores 1-10</Typography.Title>
        <Row
          gutter={[10, 10]}
          justify="space-around"
          align="middle"
          style={{ backgroundColor: 'white', textAlign: 'center' }}
        >
          <Col span={2}>
            <Statistic
              title="Score"
              value={score.score}
              prefix={<StarFilled style={{ color: '#F6AB24' }} />}
            />
          </Col>
          <Col span={2}>
            <Statistic title="Ranked" value={score.rank} prefix={<NumberOutlined />} />
          </Col>
          <Col span={2}>
            <Statistic title="Popularity" value={score.popularity} prefix={<NumberOutlined />} />
          </Col>
          <Col span={2}>
            <Statistic title="Members" value={score.members} />
          </Col>
          <Col span={10}>{chart}</Col>
        </Row>
      </Col>
      {/* <Col xs={11} xxl={12}>
        <Typography.Title level={4}>Percentage of votes for scores 1-10</Typography.Title>
        <Row
          gutter={[10, 10]}
          justify="space-around"
          align="middle"
          style={{ backgroundColor: 'white', textAlign: 'center' }}
        >
          
        </Row>
      </Col> */}
    </>
  );
};
