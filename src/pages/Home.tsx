import React from 'react';
import { Search } from '../components/home/Search';
import { search } from '../api/api';
import { Layout, Result, Spin } from 'antd';
import { useQuery } from 'react-query';
import { StringParam, useQueryParam } from 'use-query-params';

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
      <Search data={data} />
    </Layout>
  );
};
