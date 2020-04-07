import React from 'react';
import _ from 'lodash';
import { MangaResponse } from '../../api/api';
import { Col, Row, Card } from 'antd';

interface Props {
  data: MangaResponse;
}

export const MangaHeader = (props: Props): JSX.Element => {
  const { data } = props;
  const truncatedSynopsis = _.truncate(data.synopsis, { length: 1100 });

  return (
    <Row justify="center" gutter={14} style={{ height: '100%', marginTop: '15px' }}>
      <Col span={3} style={{ height: '100%' }}>
        <img alt="" src={data.image_url} height="313px" width="100%" />
      </Col>
      <Col span={14} style={{ height: '100%' }}>
        <Card bordered={false} title={data.title} style={{ height: '313px' }}>
          <h3>Synopsis:</h3>
          <p>{truncatedSynopsis}</p>
        </Card>
      </Col>
    </Row>
  );
};
