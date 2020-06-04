import React from 'react';
import _ from 'lodash';
import { AnimeReview } from '../../../api/api';
import { Col, Row, List, Avatar, Divider, Typography } from 'antd';
import { StarFilled, LikeFilled } from '@ant-design/icons';

interface Props {
  reviews: AnimeReview[];
}

const { Paragraph } = Typography;

export const ReviewList = (props: Props) => {
  const { reviews } = props;

  const data = _.map(reviews, (review) => {
    return {
      content: review.content,
      avatar: review.reviewer.image_url,
      username: review.reviewer.username,
      usernameUrl: review.reviewer.url,
      helpfulCount: review.helpful_count,
      score: review.reviewer.scores.overall,
    };
  });

  const descriptionText = (score: number, count: number) => (
    <div>
      <StarFilled style={{ color: '#F6AB24' }}></StarFilled>
      <b>{` Overall Score: ${score}/10`}</b>
      <Divider type="vertical" style={{ backgroundColor: 'black' }} />
      <b>{`${count} people found this review helpful`}</b>
    </div>
  );

  const IconText = ({ icon, text }: any) => (
    <span>
      {React.createElement(icon, { style: { marginRight: 8 } })}
      {text}
    </span>
  );

  const list = (
    <Col span={24}>
      <List
        itemLayout="vertical"
        dataSource={data}
        bordered={true}
        loadMore={true}
        renderItem={(item) => (
          <List.Item
            actions={[
              <IconText icon={LikeFilled} text={`${item.helpfulCount}`} key="list-vertical-like" />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar size="large" shape="square" src={item.avatar} />}
              title={<a href={`${item.usernameUrl}`}>{`Review by: ${item.username}`}</a>}
              description={descriptionText(item.score, item.helpfulCount)}
            />
            <Paragraph ellipsis={{ rows: 6, expandable: true }}>{item.content}</Paragraph>
          </List.Item>
        )}
      />
    </Col>
  );

  return (
    <>
      <Row gutter={[16, 16]} justify="center">
        {list}
      </Row>
      <br />
    </>
  );
};
