import React from 'react';
import _ from 'lodash';
import { AnimeCharacters } from '../../api/api';
import { Col, Row, Card } from 'antd';

interface CharacterCardProps {
  image_url: string;
  name: string;
  role: string;
}

interface Props {
  data: AnimeCharacters[];
}

export const CharacterCard = (props: CharacterCardProps) => {
  const { image_url, name, role } = props;
  return (
    <Card cover={<img alt="" src={image_url} />}>
      <Card.Meta title={name} description={role}></Card.Meta>
    </Card>
  );
};

export const OverviewCharacters = (props: Props) => {
  const { data } = props;

  const slicedData = _.slice(data, 0, 6);
  const grouped = _.chunk(slicedData, 3);

  const rows = _.map(grouped, (items) => {
    const cols = _.map(items, (item, index) => {
      const { image_url, name, role } = item;
      return (
        <Col span={3} key={index}>
          <CharacterCard image_url={image_url} name={name} role={role} />
        </Col>
      );
    });
    return (
      <Row gutter={[16, 16]} justify="center">
        {cols}
      </Row>
    );
  });

  return <Col span={12}>{rows}</Col>;
};
