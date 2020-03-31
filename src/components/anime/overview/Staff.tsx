import React from 'react';
import _ from 'lodash';
import { AnimeStaff } from '../../../api/api';
import { Col, Row, Card } from 'antd';

interface IndividualStaffCardProps {
  url: string;
  name: string;
  image_url: string;
  positions: string[];
}

const StaffCard = (props: IndividualStaffCardProps) => {
  const { url, image_url, name, positions } = props;

  return (
    <Card
      className="character"
      bordered={false}
      style={{
        display: 'inline-grid',
        gridTemplateColumns: '60px auto',
        height: '80px',
        width: '337.31px',
      }}
      bodyStyle={{
        height: '80px',
        width: '285.33px',
        padding: '5px',
        fontSize: '0.9rem',
        overflow: 'hidden',
      }}
      cover={
        <img alt="" src={image_url} style={{ height: '80px', width: '60px', gridArea: 'image' }} />
      }
    >
      <div style={{ gridArea: 'content', overflow: 'hidden' }}>
        <a href={url}>{name}</a>
        <div style={{ marginTop: '25px' }}>{positions}</div>
      </div>
    </Card>
  );
};

interface ThreeStaffCardProps {
  data: AnimeStaff[];
}

export const StaffList = (props: ThreeStaffCardProps) => {
  const { data } = props;
  const slicedData = _.slice(data, 0, 3);

  const staffCards = _.map(slicedData, (item) => {
    const { name, url, image_url, positions } = item;
    return (
      <Col>
        <StaffCard name={name} url={url} image_url={image_url} positions={positions} />
      </Col>
    );
  });

  return (
    <div>
      <div>
        <h3>Staff</h3>
      </div>
      <Row gutter={[40, 16]}>{staffCards}</Row>
    </div>
  );
};
