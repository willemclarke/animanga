import React from 'react';
import _ from 'lodash';
import { AnimeReview } from '../../../api/api';
import { Col, Row, List, Avatar, Divider } from 'antd';
import { StarFilled, LikeFilled } from '@ant-design/icons';

interface Props {
  review: AnimeReview[];
}

export const ReviewList = (props: Props) => {
  const { review } = props;

  const data = _.map(review, (item) => {
    return {
      description: item.content,
      avatar: item.reviewer.image_url,
      username: item.reviewer.username,
      usernameUrl: item.reviewer.url,
      helpfulCount: item.helpful_count,
      score: item.reviewer.scores.overall,
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
            {item.description}
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

// replace(/\n/g, '<br />')
