import React from 'react';
import _ from 'lodash';
import { AnimeHeader } from './components/AnimeHeader';
import { LeftInformation } from './components/LeftInformation';
import { Layout, Spin, Result } from 'antd';
import { useParams } from 'react-router-dom';
import { getAnimeData, GetAnimeResponse } from '../../../api/api';
import { useQuery } from 'react-query';

const { Content } = Layout;

export const Anime = () => {
  const { id } = useParams<{ id: string }>();
  const idToNumber = parseInt(id);

  const { isFetching, data, error } = useQuery(`${idToNumber}`, () => getAnimeData(idToNumber));

  if (isFetching) {
    return (
      <Layout style={{ height: '100vh' }}>
        <Spin />
      </Layout>
    );
  }

  if (error || !data) {
    console.log(error);
    return <Result status="500" title="500" subTitle={error?.message} />;
  }

  return (
    <Layout style={{ height: '100%', padding: '24px' }}>
      <Content>
        <AnimeHeader data={data} />
        <LeftInformation data={data} />
      </Content>
    </Layout>
  );
};
