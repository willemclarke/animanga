import React from 'react';
import _ from 'lodash';
import { SearchResponse } from '../../api/api';
import { AnimeMangaCard } from './AnimeMangaCard';
import { Col, Row, Layout } from 'antd';

const { Content } = Layout;

interface Props {
  data: SearchResponse[];
}

export const HomeSearch = (props: Props) => {
  const { data } = props;

  const grouped = _.chunk(data, 6);
  const rows = _.map(grouped, (items) => {
    const cols = _.map(items, (item) => {
      const { image_url, title, synopsis, mal_id, type } = item;
      return (
        <Col span={4} style={{}}>
          <AnimeMangaCard
            mal_id={mal_id}
            title={title}
            type={type}
            image_url={image_url}
            synopsis={synopsis}
            key={mal_id}
          />
        </Col>
      );
    });
    return <Row gutter={[24, 24]}>{cols}</Row>;
  });

  return <Content>{rows}</Content>;
};
