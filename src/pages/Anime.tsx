import React from 'react';
import { AnimeHeader } from '../components/anime/AnimeHeader';
import { Overview } from '../components/anime/overview/Overview';
import { Layout, Spin, Result, Row, Col } from 'antd';
import { useParams } from 'react-router-dom';
import { getAnimeData, getAnimeCharacters, getAnimeScoreInfo, getAnimeStaff } from '../api/api';
import { useQuery } from 'react-query';

const { Content } = Layout;

export const Anime = () => {
  const { id } = useParams<{ id: string }>();
  const idToNumber = parseInt(id);

  const { isFetching: animeIsFetching, data: anime, error: animeError } = useQuery(
    'animeKey',
    () => {
      return getAnimeData(idToNumber);
    },
  );

  const { isFetching: charactersIsFetching, data: characters, error: charactersError } = useQuery(
    'characterKey',
    () => {
      return getAnimeCharacters(idToNumber);
    },
  );

  const { isFetching: scoresIsFetching, data: scores, error: scoresError } = useQuery(
    'scoreKey',
    () => {
      return getAnimeScoreInfo(idToNumber);
    },
  );

  const { isFetching: staffIsFetching, data: staff, error: staffError } = useQuery(
    'staffKey',
    () => {
      return getAnimeStaff(idToNumber);
    },
  );

  if (animeIsFetching || charactersIsFetching || scoresIsFetching || staffIsFetching) {
    return (
      <Layout style={{ height: '100vh' }}>
        <Spin />
      </Layout>
    );
  }

  if (
    animeError ||
    charactersError ||
    scoresError ||
    staffError ||
    !anime ||
    !characters ||
    !scores ||
    !staff
  ) {
    return <Result status="500" title="500" subTitle={animeError?.message} />;
  }

  return (
    <Layout style={{ height: '100%' }}>
      <AnimeHeader data={anime} />
      <Content>
        <Overview
          generalInformation={anime}
          characters={characters}
          status={scores}
          staff={staff}
        />
      </Content>
    </Layout>
  );
};
