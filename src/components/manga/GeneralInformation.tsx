import React from 'react';
import _ from 'lodash';
import { MangaResponse } from '../../api/api';
import { Card, Divider } from 'antd';
import { StarFilled, HeartFilled } from '@ant-design/icons';

interface Props {
  data: MangaResponse;
}

export const GeneralInformation = (props: Props) => {
  const { data } = props;

  const mangaGenres = _.map(data.genres, (genre, index) => {
    return <a href={genre.url} key={index}>{`${genre.name}, `}</a>;
  });

  const mangaAuthors = _.map(data.authors, (author, index) => {
    return <a href={author.url} key={index}>{`${author.name}, `}</a>;
  });

  const mangaSerializations = _.map(data.serializations, (serialization, index) => {
    return <a href={serialization.url} key={index}>{`${serialization.name}, `}</a>;
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
            <b>Volumes: </b> {data.volumes}
          </div>
          <div>
            <b>Chapters: </b>
            {data.chapters}
          </div>
          <div>
            <b>Status: </b>
            {data.status}
          </div>
          <div>
            <b>Published: </b>
            {data.published.prop.string}
          </div>
          <div>
            <b>Genres: </b>
            {mangaGenres}
          </div>
          <div>
            <b>Authors: </b> {mangaAuthors}
          </div>
          <div>
            <b>Serialization: </b> {mangaSerializations}
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
