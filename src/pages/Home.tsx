import React from 'react';
import { HomeSearch } from '../components/home-search/HomeSearch';
import { Layout, Result, Spin } from 'antd';
import { useQuery } from 'react-query';
import { StringParam, useQueryParam } from 'use-query-params';
import { search } from '../api/api';

export const Home = () => {
  const [searchTerm] = useQueryParam('search', StringParam);

  const { isFetching, data, error } = useQuery(searchTerm || 'search', () =>
    search(searchTerm || ''),
  );

  if (isFetching) {
    return (
      <Layout style={{ height: '100vh' }}>
        <Spin />
      </Layout>
    );
  }

  if (error || !data) {
    return <Result status="500" title="500" subTitle={error?.message} />;
  }

  return (
    <Layout style={{ height: '100vh', padding: '24px' }}>
      <HomeSearch data={data} />
    </Layout>
  );
};
