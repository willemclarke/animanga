import { Layout, Result, Spin } from 'antd';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getCombinedAnimeData } from '../api/api';
import { AnimeHeader } from '../components/anime/AnimeHeader';
import { AnimeTabSelector } from '../components/anime/AnimeTabSelector';

export const Anime = () => {
  const { id } = useParams<{ id: string }>();
  const idToNumber = parseInt(id);

  const { isFetching, data, error } = useQuery('animeKey', () => {
    return getCombinedAnimeData(idToNumber);
  });

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

  const { basic, characters, staff, scoreInfo, reviews } = data;

  return (
    <Layout style={{ height: '100%' }}>
      <AnimeHeader data={basic} />
      <AnimeTabSelector
        generalInformation={basic}
        characters={characters}
        staff={staff}
        status={scoreInfo}
        score={basic}
        votes={scoreInfo}
        reviews={reviews}
      />
    </Layout>
  );
};
