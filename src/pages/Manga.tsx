import React from 'react';
import { Layout, Spin, Result } from 'antd';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getCombinedMangaData } from '../api/api';
import { MangaHeader } from '../components/manga/MangaHeader';
import { MangaTabSelector } from '../components/manga/MangaTabSelector';

export const Manga = () => {
  const { id } = useParams<{ id: string }>();
  const idToNumber = parseInt(id);

  const { isFetching, data, error } = useQuery('mangaKey', () => {
    return getCombinedMangaData(idToNumber);
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

  const { basic, characters, scoreInfo, reviews } = data;

  return (
    <Layout style={{ height: '100%' }}>
      <MangaHeader data={basic} />
      <MangaTabSelector
        generalInformation={basic}
        characters={characters}
        status={scoreInfo}
        score={basic}
        votes={scoreInfo}
        reviews={reviews}
      />
    </Layout>
  );
};
