import React from 'react';
import _ from 'lodash';
import { GetAnimeResponse } from '../../../../api/api';
import { Col, Row, Card } from 'antd';

interface Props {
  data: GetAnimeResponse;
}

export const AnimeHeader = (props: Props): JSX.Element => {
  const { data } = props;
  const truncatedSynopsis = _.truncate(data.synopsis, { length: 900 });

  return (
    <Row justify="center">
      <Col span={3}>
        <Card
          bordered={false}
          cover={<img src={data?.image_url} style={{ width: '231px', height: '306.19px' }} />}
          style={{ width: '231.88px', height: '306.19px' }}
        ></Card>
      </Col>
      <Col span={12}>
        <Card bordered={false} title={data.title}>
          <h3>Synopsis:</h3>
          <p>{truncatedSynopsis}</p>
        </Card>
      </Col>
    </Row>
  );
};
