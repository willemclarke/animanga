import React from 'react';
import _ from 'lodash';
import { AnimeReviews } from '../../../api/api';
import { Col, Row, List } from 'antd';

interface Props {
  reviews: AnimeReviews;
}

export const AnimeReviewList = (props: Props) => {
  const { reviews } = props;
};
