import React from 'react';
import _ from 'lodash';
import { MangaRecommendation } from '../../../api/api';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

interface Props {
  recommendation: MangaRecommendation;
}

export const RecommendationCard = (props: Props) => {
  const { recommendation } = props;

  const truncatedTitle = _.truncate(recommendation.title, {
    length: 16,
    separator: '',
  });

  console.log(`${recommendation.title}: ${recommendation.title.length}`);

  return (
    <>
      <Link to={`/anime/${recommendation.mal_id}`}>
        <Row justify="center">
          <Col>
            <img src={recommendation.image_url} width={130} height={180} />
          </Col>
          <Row>
            <Col>
              <p>{truncatedTitle}</p>
            </Col>
          </Row>
        </Row>
      </Link>
    </>
  );
};
