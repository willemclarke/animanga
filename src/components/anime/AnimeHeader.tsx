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
    <Row justify="center" gutter={14} style={{ backgroundColor: 'EDF1F5' }}>
      <Col span={3} style={{ marginTop: '15px' }}>
        <Card
          bordered={false}
          cover={<img alt="" src={data.image_url} style={{ height: '381.19px' }} />}
          style={{ width: '100%', height: '381.19px' }}
        ></Card>
      </Col>
      <Col span={14} style={{ marginTop: '15px' }}>
        <Card bordered={false} title={data.title}>
          <h3>Synopsis:</h3>
          <p>{truncatedSynopsis}</p>
        </Card>
      </Col>
    </Row>
  );
};
