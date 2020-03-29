import React from 'react';
import { AnimeHeader } from '../components/anime/AnimeHeader';
import { GeneralInformation } from '../components/anime/GeneralInformation';
import { OverviewCharacters } from '../components/anime/Overview';
import { Layout, Spin, Result, Row } from 'antd';
import { useParams } from 'react-router-dom';
import { getAnimeData, getAnimeCharacters } from '../api/api';
import { useQuery } from 'react-query';

const { Content } = Layout;

export const Anime = () => {
  const { id } = useParams<{ id: string }>();
  const idToNumber = parseInt(id);

  const { isFetching: animeIsFetching, data: anime, error: animeError } = useQuery(
    `animeKey`,
    () => {
      return getAnimeData(idToNumber);
    },
  );

  const { isFetching: charactersIsFetching, data: characters, error: charactersError } = useQuery(
    `characterKey`,
    () => {
      return getAnimeCharacters(idToNumber);
    },
  );

  if (animeIsFetching || charactersIsFetching) {
    return (
      <Layout style={{ height: '100vh' }}>
        <Spin />
      </Layout>
    );
  }

  if (animeError || charactersError || !anime || !characters) {
    return <Result status="500" title="500" subTitle={animeError?.message} />;
  }

  return (
    <Layout style={{ height: '100%' }}>
      <AnimeHeader data={anime} />
      <Content>
        <Row gutter={14} justify="center" style={{ marginTop: '15px' }}>
          <GeneralInformation data={anime} />
          <OverviewCharacters data={characters} />
        </Row>
      </Content>
    </Layout>
  );
};
