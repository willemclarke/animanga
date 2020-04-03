import React from 'react';
import _ from 'lodash';
import { AnimeResponse } from '../../api/api';
import { Col, Card, Divider } from 'antd';
import { StarFilled, HeartFilled } from '@ant-design/icons';

interface Props {
  data: AnimeResponse;
}

export const GeneralInformation = (props: Props) => {
  const { data } = props;

  const studios = _.map(data.studios, (studio, index) => {
    return <a href={studio.url} key={index}>{`${studio.name}, `}</a>;
  });

  const producers = _.map(data.producers, (producer, index) => {
    return <a href={producer.url} key={index}>{`${producer.name}, `}</a>;
  });

  const licensors = _.isEmpty(data.licensors) ? (
    <span>None found</span>
  ) : (
    _.map(data.licensors, (license, index) => {
      return <a href={license.url} key={index}>{`${license.name}, `}</a>;
    })
  );

  const genres = _.map(data.genres, (genre, index) => {
    return <a href={genre.url} key={index}>{`${genre.name}, `}</a>;
  });

  return (
    <>
      <Card bordered={false} bodyStyle={{ padding: '8px' }}>
        <div>
          <StarFilled style={{ color: '#F6AB24' }}></StarFilled>
          <span>
            <b>{` #${data.rank} Highest Rated All Time`}</b>
          </span>
        </div>
      </Card>

      <Card
        bordered={false}
        style={{ marginTop: '10px', marginBottom: '10px' }}
        bodyStyle={{ padding: '8px' }}
      >
        <div>
          <HeartFilled style={{ color: 'red' }}></HeartFilled>
          <span>
            <b>{` #${data.popularity} Most Popular All Time`}</b>
          </span>
        </div>
      </Card>

      <Card bordered={false} className="general-info-card">
        <div className="information-title">
          <h3>Information</h3>
          <Divider style={{ margin: '1px' }}></Divider>
        </div>
        <div className="information-info" style={{ paddingTop: '3px' }}>
          <div>
            <b>Type: </b>
            {data.type}
          </div>
          <div>
            <b>Episodes: </b> {data.episodes}
          </div>
          <div>
            <b>Status: </b>
            {data.status}
          </div>
          <div>
            <b>Premiered: </b>
            {data.premiered}
          </div>
          <div>
            <b>Producers: </b>
            {producers}
          </div>
          <div>
            <b>Licensors: </b>
            {licensors}
          </div>
          <div>
            <b>Studios: </b>
            {studios}
          </div>
          <div>
            <b>Source: </b> {data.source}
          </div>
          <div>
            <b>Genres: </b>
            {genres}
          </div>
          <div>
            <b>Duration: </b> {data.duration}
          </div>
          <div>
            <b>Rating: </b> {data.rating}
          </div>
        </div>

        <div className="statistics-title" style={{ paddingTop: '8px' }}>
          <h3>Statistics</h3>
          <Divider style={{ margin: '1px' }}></Divider>
        </div>
        <div className="statistics-info" style={{ paddingTop: '3px' }}>
          <div>
            <b>Score: </b>
            {data.score}
          </div>
          <div>
            <b>Scored By: </b>
            {`${data.scored_by} users`}
          </div>
          <div>
            <b>Ranked: </b>
            {`#${data.rank}`}
          </div>
          <div>
            <b>Popularity: </b>
            {`#${data.popularity}`}
          </div>
          <div>
            <b>Members: </b>
            {`${data.members}`}
          </div>
          <div>
            <b>Favorites: </b>
            {`${data.favorites}`}
          </div>
        </div>
      </Card>
    </>
  );
};
