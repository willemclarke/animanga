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

  return (
    <Layout style={{ height: '100%' }}>
      <Content>
        <Row justify="center">
          {_.map(data, (value, index) => {
            const { image_url, title, synopsis, mal_id, type } = value;
            if (index <= 5) {
              return (
                <Col span={4} style={{ padding: '35px 15px 10px 15px' }}>
                  <AnimeMangaCard
                    title={title}
                    type={type}
                    image_url={image_url}
                    synopsis={synopsis}
                    key={mal_id}
                  />
                </Col>
              );
            }
          })}
        </Row>
        <Row justify="center">
          {_.map(data, (value, index) => {
            const { image_url, title, synopsis, mal_id, type } = value;
            if (index > 5 && index <= 11) {
              return (
                <Col span={4} style={{ padding: '35px 15px 15px 15px' }}>
                  <AnimeMangaCard
                    image_url={image_url}
                    type={type}
                    title={title}
                    synopsis={synopsis}
                    key={mal_id}
                  />
                </Col>
              );
            }
          })}
        </Row>
      </Content>
    </Layout>
  );
};
