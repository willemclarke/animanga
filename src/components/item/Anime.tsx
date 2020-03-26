import React from 'react';
import { Col, Row, Layout, Spin, Result, Card } from 'antd';
import { useParams } from 'react-router-dom';
import { getAnimeData, GetAnimeResponse } from '../../api/api';
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

  if (error) {
    console.log(error);
    return <Result status="500" title="500" subTitle={error.message} />;
  }

  const headerAnime = (
    <Row className="header" justify="center">
      <Col span={4}>
        <Card bordered={false} cover={<img src={data?.image_url} />}></Card>
      </Col>
      <Col span={12}>
        <Card bordered={false} title={data?.title}>
          <h3>Synopsis:</h3>
          <p>{data?.synopsis}</p>
        </Card>
      </Col>
    </Row>
  );

  return (
    <Layout>
      <Content>{headerAnime}</Content>
    </Layout>
  );
};
