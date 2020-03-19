import { Col, Layout, Result, Row, Spin } from 'antd';
import _ from 'lodash';
import React from 'react';
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
    return <Spin />;
  }

  if (error) {
    return <Result status="500" title="500" subTitle={error.message} />;
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <Content>
        <Row justify="center">
          {_.map(data, (value, index) => {
            const { image_url, title, synopsis, mal_id } = value;
            if (index <= 2) {
              return (
                <Col span={5.25} style={{ padding: '35px 15px 15px 15px' }}>
                  <AnimeMangaCard
                    title={title}
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
            const { image_url, title, synopsis, mal_id } = value;
            if (index > 2 && index <= 5) {
              return (
                <Col span={5.25} style={{ padding: '15px' }}>
                  <AnimeMangaCard
                    image_url={image_url}
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
