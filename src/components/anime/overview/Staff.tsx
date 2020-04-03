import React from 'react';
import _ from 'lodash';
import { AnimeStaff } from '../../../api/api';
import { Col, Row, Card, Typography } from 'antd';

interface Props {
  staff: AnimeStaff;
}

export const StaffCard = (props: Props) => {
  const { staff } = props;

  const firstStaffPosition = _.take(staff.positions, 1);

  return (
    <div style={{ display: 'flex', backgroundColor: 'white' }}>
      <div style={{ width: '60px', flex: '0 0 60px' }}>
        <img src={staff.image_url} height={80} width={60} />
      </div>
      <div style={{ flex: '1', padding: '5px' }}>
        <Row>
          <Col span={12}>
            <Typography.Text strong>{staff.name}</Typography.Text>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Typography.Text type="secondary">{firstStaffPosition}</Typography.Text>
          </Col>
        </Row>
      </div>
    </div>
  );
};
