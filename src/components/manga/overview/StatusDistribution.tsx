import React from 'react';
import _ from 'lodash';
import { MangaScoreData } from '../../../api/api';
import { Col, Row } from 'antd';

interface Props {
  status: MangaScoreData;
}

export const StatusDistribution = (props: Props) => {
  const { status } = props;

  return (
    <>
      <Col xs={12} xxl={8} style={{ fontSize: '1rem' }}>
        <Row
          style={{
            backgroundColor: '#68D639',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Reading
        </Row>
        <Row style={{ backgroundColor: 'white', justifyContent: 'center', color: '#68D639' }}>
          {`${status.reading} users`}
        </Row>
      </Col>
      <Col xs={12} xxl={8} style={{ fontSize: '1rem' }}>
        <Row
          style={{
            backgroundColor: '#02A9FF',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Plan to Read
        </Row>
        <Row
          style={{ backgroundColor: 'white', justifyContent: 'center', color: '#02A9FF' }}
        >{`${status.plan_to_read} users`}</Row>
      </Col>
      <Col xs={12} xxl={8} style={{ fontSize: '1rem' }}>
        <Row
          style={{
            backgroundColor: '#9256F3',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Dropped
        </Row>
        <Row
          style={{ backgroundColor: 'white', justifyContent: 'center', color: '#9256F3' }}
        >{`${status.dropped} users`}</Row>
      </Col>
      <Col xs={12} xxl={8} style={{ fontSize: '1rem' }}>
        <Row
          style={{
            backgroundColor: '#F779A4',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          On hold
        </Row>
        <Row
          style={{ backgroundColor: 'white', justifyContent: 'center', color: '#F779A4' }}
        >{`${status.on_hold} users`}</Row>
      </Col>
      <Col xs={12} xxl={8} style={{ fontSize: '1rem' }}>
        <Row
          style={{
            backgroundColor: '#E85D75',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Completed
        </Row>
        <Row
          style={{ backgroundColor: 'white', justifyContent: 'center', color: '#E85D75' }}
        >{`${status.completed} users`}</Row>
      </Col>
      <Col xs={12} xxl={8} style={{ fontSize: '1rem' }}>
        <Row
          style={{
            backgroundColor: '#1F2631',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Total
        </Row>
        <Row
          style={{ backgroundColor: 'white', justifyContent: 'center', color: '#1F2631' }}
        >{`${status.total} users`}</Row>
      </Col>
    </>
  );
};
