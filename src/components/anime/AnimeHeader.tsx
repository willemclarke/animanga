import React from 'react';
import _ from 'lodash';
import { AnimeResponse } from '../../api/api';
import { Col, Row, Card, Breadcrumb, Tabs } from 'antd';

interface Props {
  data: AnimeResponse;
}

export const AnimeHeader = (props: Props): JSX.Element => {
  const { data } = props;
  const truncatedSynopsis = _.truncate(data.synopsis, { length: 1100 });

  return (
    <Row justify="center" gutter={14} style={{ height: '100%' }}>
      <Col span={3} style={{ height: '100%' }}>
        <img alt="" src={data.image_url} width="100%" />
      </Col>
      <Col span={14} style={{ height: '100%' }}>
        <Card bordered={false} title={data.title} style={{ height: '100%' }}>
          <h3>Synopsis:</h3>
          <p>{truncatedSynopsis}</p>
        </Card>
      </Col>
    </Row>
  );
};
