import React from 'react';
import { Col, Row, Layout, Spin, Result } from 'antd';
import { useParams } from 'react-router-dom';
import { getMangaData } from '../api/api';
import { useQuery } from 'react-query';

export const Manga = () => {
  const { id } = useParams<{ id: string }>();
  const idToNumber = parseInt(id);

  const { isFetching, data, error } = useQuery(`${idToNumber}`, () => {
    return getMangaData(idToNumber);
  });

  if (isFetching) {
    return (
      <Layout style={{ height: '100vh' }}>
        <Spin />
      </Layout>
    );
  }

  if (error) {
    console.log(error);
    return <Result status="500" title="500" subTitle={error.message} />;
  }

  return <div>{data}</div>;
};
