import React from 'react';
import { Col, Row } from 'antd';
import { useParams } from 'react-router-dom';

export const Anime = () => {
  const id = useParams<number>();
  console.log(id);
  return <div>Anime</div>;
};
