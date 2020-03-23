import _ from 'lodash';
import React from 'react';
import { Col, Layout, Result, Row, Spin } from 'antd';
import { useQuery } from 'react-query';
import { StringParam, useQueryParam } from 'use-query-params';
import { search } from '../../api/api';
import { AnimeMangaCard } from './AnimeMangaCard';

const { Content } = Layout;

export const AnimeMangaList = () => {
  const [searchTerm] = useQueryParam('search', StringParam);

  const { isFetching, data, error } = useQuery(searchTerm || 'search', () =>
    search(searchTerm || ''),
  );

  if (isFetching) {
    return (
      <Layout style={{ height: '100%' }}>
        <Spin />
      </Layout>
    );
  }

  if (error) {
    return <Result status="500" title="500" subTitle={error.message} />;
  }

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

  return (
    <Layout style={{ height: '100%', padding: '24px' }}>
      <Content>{rows}</Content>
    </Layout>
  );
};
