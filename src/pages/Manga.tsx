import React from 'react';
import { Layout, Spin, Result } from 'antd';
import { useParams } from 'react-router-dom';
import { MangaHeader } from '../components/manga/MangaHeader';
import { Overview } from '../components/manga/overview/Overview';
import { getMangaData, getMangaCharacters, getMangaScoreInfo } from '../api/api';
import { useQuery } from 'react-query';

const { Content } = Layout;

export const Manga = () => {
  const { id } = useParams<{ id: string }>();
  const idToNumber = parseInt(id);

  const { isFetching: mangaIsFetching, data: manga, error: mangaError } = useQuery(
    'mangaKey',
    () => {
      return getMangaData(idToNumber);
    },
  );

  const { isFetching: charactersIsFetching, data: characters, error: charactersError } = useQuery(
    'characterKey',
    () => {
      return getMangaCharacters(idToNumber);
    },
  );

  const { isFetching: scoresIsFetching, data: scores, error: scoresError } = useQuery(
    'scoreKey',
    () => {
      return getMangaScoreInfo(idToNumber);
    },
  );

  if (mangaIsFetching || charactersIsFetching || scoresIsFetching) {
    return (
      <Layout style={{ height: '100vh' }}>
        <Spin />
      </Layout>
    );
  }

  if (mangaError || charactersError || scoresError || !manga || !characters || !scores) {
    console.log(mangaError);
    return <Result status="500" title="500" subTitle={mangaError?.message} />;
  }

  return (
    <Layout style={{ height: '100%' }}>
      <MangaHeader data={manga} />
      <Content>
        <Overview generalInformation={manga} characters={characters} status={scores} />
      </Content>
    </Layout>
  );
};
