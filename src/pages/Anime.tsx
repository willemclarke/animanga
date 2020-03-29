import React from 'react';
import _ from 'lodash';
import { AnimeHeader } from '../components/anime/AnimeHeader';
import { LeftInformation } from '../components/anime/LeftInformation';
import { Layout, Spin, Result, Row, Col } from 'antd';
import { useParams } from 'react-router-dom';
import { getAnimeData, getAnimeCharacters } from '../api/api';
import { useQuery } from 'react-query';
import { CharacterCard, OverviewCharacters } from '../components/anime/Overview';

const { Content } = Layout;

export const Anime = () => {
  const { id } = useParams<{ id: string }>();
  const idToNumber = parseInt(id);

  const { isFetching: animeIsFetching, data: anime, error: animeError } = useQuery(
    `animeKey`,
    () => {
      console.log('I GOT HERE, ANIME DATA');
      return getAnimeData(idToNumber);
    },
  );

  const { isFetching: charactersIsFetching, data: characters, error: charactersError } = useQuery(
    `characterKey`,
    () => {
      console.log('I GOT HERE, Character Data');
      return getAnimeCharacters(idToNumber);
    },
  );

  console.log(anime);
  console.log(characters);

  if (animeIsFetching || charactersIsFetching) {
    return (
      <Layout style={{ height: '100vh' }}>
        <Spin />
      </Layout>
    );
  }

  if (animeError || charactersError || !anime || !characters) {
    console.log(animeError);
    return <Result status="500" title="500" subTitle={animeError?.message} />;
  }

  return (
    <Layout style={{ height: '100%' }}>
      <AnimeHeader data={anime} />
      <Content>
        <Row gutter={14} justify="center" style={{ marginTop: '15px' }}>
          <LeftInformation data={anime} /> {/*Component span={4} */}
          <OverviewCharacters data={characters} />
        </Row>
      </Content>
    </Layout>
  );
};
