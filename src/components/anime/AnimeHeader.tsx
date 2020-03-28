import React from 'react';
import _ from 'lodash';
import { GetAnimeResponse } from '../../api/api';
import { Col, Row, Card, Breadcrumb } from 'antd';

interface Props {
  data: GetAnimeResponse;
}

export const AnimeHeader = (props: Props): JSX.Element => {
  const { data } = props;
  const truncatedSynopsis = _.truncate(data.synopsis, { length: 900 });

  return (
    <Row justify="center" gutter={14} style={{ backgroundColor: 'EDF1F5' }}>
      <Col span={4} style={{ marginTop: '15px' }}>
        <Card
          bordered={false}
          cover={
            <img
              src={data?.image_url}
              style={{ height: '381.19px', boxShadow: '0, 0, 30px, 333' }}
            />
          }
          style={{ width: '100%', height: '381.19px' }}
        ></Card>
      </Col>
      <Col span={12} style={{ marginTop: '15px' }}>
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
// style={{ width: '231px', height: '306.19px' }}
