import React from 'react';
import _ from 'lodash';
import { MangaResponse } from '../../api/api';
import { Col, Row, Card, Breadcrumb } from 'antd';

interface Props {
  data: MangaResponse;
}

export const MangaHeader = (props: Props): JSX.Element => {
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
        <Card
          bordered={false}
          style={{ marginTop: '5px', display: 'flex', justifyContent: 'center', fontSize: '3rem' }}
        >
          <Breadcrumb>
            <Breadcrumb.Item>
              <a href=""> Overview</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href=""> Characters</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href=""> Reviews</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href=""> Stats</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Card>
      </Col>
    </Row>
  );
};
