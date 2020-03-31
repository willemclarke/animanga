import React from 'react';
import _ from 'lodash';
import { AnimeCharacter, AnimeScoreData, AnimeResponse, AnimeStaff } from '../../api/api';
import { GeneralInformation } from './GeneralInformation';
import { Col, Row, Card } from 'antd';

interface CharacterCardProps {
  image_url: string;
  name: string;
  role: string;
  url: string;
  voice_actors: [
    {
      name: string;
      url: string;
      image_url: string;
      language: string;
    },
  ];
}

export const CharacterAndStaffCard = (props: CharacterCardProps) => {
  const { image_url, name, role, url, voice_actors } = props;

  return (
    <div
      style={{
        height: '80px',
        display: 'inline-grid',
        gridTemplateColumns: '50% 50%',
        overflow: 'hidden',
      }}
    >
      <Card
        className="character"
        bordered={false}
        style={{
          display: 'inline-grid',
          gridTemplateColumns: '60px auto',
          gridTemplateAreas: 'image content',
          height: '80px',
          width: '168.66px',
        }}
        bodyStyle={{
          height: '80px',
          width: '108.66px',
          padding: '5px',
          fontSize: '0.9rem',
          overflow: 'hidden',
        }}
        cover={
          <img
            alt=""
            src={image_url}
            style={{ height: '80px', width: '60px', gridArea: 'image' }}
          />
        }
      >
        <div style={{ gridArea: 'content', overflow: 'hidden' }}>
          <a href={url}>{name}</a>
          <div>{role}</div>
        </div>
      </Card>
      <Card
        className="staff"
        bordered={false}
        style={{
          display: 'inline-grid',
          gridTemplateColumns: '60px auto',
          gridTemplateAreas: 'image content',
          height: '80px',
          width: '168.66px',
          transform: 'scaleX(-1)',
        }}
        bodyStyle={{
          height: '80px',
          width: '108.66px',
          padding: '5px',
          fontSize: '0.9rem',
          overflow: 'hidden',
        }}
        cover={
          <img
            alt=""
            src={voice_actors[0].image_url}
            style={{ height: '80px', width: '60px', gridArea: 'image' }}
          />
        }
      >
        <div style={{ gridArea: 'content', overflow: 'hidden', transform: 'scaleX(-1)' }}>
          <a href={voice_actors[0].url}>{voice_actors[0].name}</a>
          <div>{voice_actors[0].language}</div>
        </div>
      </Card>
    </div>
  );
};

interface CharacterProps {
  data: AnimeCharacter[];
}

export const SixCharacters = (props: CharacterProps) => {
  const { data } = props;

  const slicedData = _.slice(data, 0, 6);
  const grouped = _.chunk(slicedData, 3);

  const rows = _.map(grouped, (items) => {
    const cols = _.map(items, (item, index) => {
      const { image_url, name, role, url, voice_actors } = item;
      return (
        <Col key={index}>
          <CharacterAndStaffCard
            image_url={image_url}
            name={name}
            role={role}
            url={url}
            voice_actors={voice_actors}
          />
        </Col>
      );
    });
    return (
      <Row gutter={[40, 16]} justify="center">
        {cols}
      </Row>
    );
  });

  return (
    <div>
      <div>
        <h3>Characters</h3>
      </div>
      {rows}
    </div>
  );
};

interface StatusProps {
  data: AnimeScoreData;
}

export const StatusDistribution = (props: StatusProps) => {
  const { data } = props;
  const { watching, completed, dropped, on_hold, plan_to_watch } = data;

  return (
    <Row gutter={[30, 12]} style={{ width: '100%' }}>
      <div>
        <h3>Status Distribution</h3>
      </div>
      <Card
        bordered={false}
        style={{ width: '100%' }}
        bodyStyle={{
          display: 'flex',
          alignItems: 'side-by-side',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Col span={5}>
          <Card
            title="Completed"
            bordered={false}
            style={{ width: '100%' }}
            headStyle={{ backgroundColor: '#68D639', color: 'white' }}
            bodyStyle={{
              padding: '8px',
              fontSize: '1rem',
              backgroundColor: '#F0F2F5',
              display: 'flex',
              justifyContent: 'center',
            }}
          >{`${completed} users`}</Card>
        </Col>
        <Col span={5}>
          <Card
            title="Planning"
            bordered={false}
            style={{ width: '100%' }}
            headStyle={{ backgroundColor: '#02A9FF', color: 'white' }}
            bodyStyle={{
              padding: '8px',
              fontSize: '1rem',
              backgroundColor: '#F0F2F5',
              display: 'flex',
              justifyContent: 'center',
            }}
          >{`${plan_to_watch} users`}</Card>
        </Col>
        <Col span={5}>
          <Card
            title="Watching"
            bordered={false}
            style={{ width: '100%' }}
            headStyle={{ backgroundColor: '#9256F4', color: 'white' }}
            bodyStyle={{
              padding: '8px',
              fontSize: '1rem',
              backgroundColor: '#F0F2F5',
              display: 'flex',
              justifyContent: 'center',
            }}
          >{`${watching} users`}</Card>
        </Col>
        <Col span={5}>
          <Card
            title="Paused"
            bordered={false}
            style={{ width: '100%' }}
            headStyle={{ backgroundColor: '#F779A4', color: 'white' }}
            bodyStyle={{
              padding: '8px',
              fontSize: '1rem',
              backgroundColor: '#F0F2F5',
              display: 'flex',
              justifyContent: 'center',
            }}
          >{`${on_hold} users`}</Card>
        </Col>
        <Col span={5}>
          <Card
            title="Dropped"
            bordered={false}
            style={{ width: '100%' }}
            headStyle={{ backgroundColor: '#E85D75', color: 'white' }}
            bodyStyle={{
              padding: '8px',
              fontSize: '1rem',
              backgroundColor: '#F0F2F5',
              display: 'flex',
              justifyContent: 'center',
            }}
          >{`${dropped} users`}</Card>
        </Col>
      </Card>
    </Row>
  );
};

interface IndividualStaffCardProps {
  url: string;
  name: string;
  image_url: string;
  positions: string[];
}
export const StaffCard = (props: IndividualStaffCardProps) => {
  const { url, image_url, name, positions } = props;

  return (
    <Card
      className="character"
      bordered={false}
      style={{
        display: 'inline-grid',
        gridTemplateColumns: '60px auto',
        height: '80px',
        width: '337.31px',
      }}
      bodyStyle={{
        height: '80px',
        width: '285.33px',
        padding: '5px',
        fontSize: '0.9rem',
        overflow: 'hidden',
      }}
      cover={
        <img alt="" src={image_url} style={{ height: '80px', width: '60px', gridArea: 'image' }} />
      }
    >
      <div style={{ gridArea: 'content', overflow: 'hidden' }}>
        <a href={url}>{name}</a>
        <div style={{ marginTop: '25px' }}>{positions}</div>
      </div>
    </Card>
  );
};

interface ThreeStaffCardProps {
  data: AnimeStaff[];
}

export const ThreeStaffCards = (props: ThreeStaffCardProps) => {
  const { data } = props;
  const slicedData = _.slice(data, 0, 3);

  const staffCards = _.map(slicedData, (item) => {
    const { name, url, image_url, positions } = item;
    return (
      <Col>
        <StaffCard name={name} url={url} image_url={image_url} positions={positions} />
      </Col>
    );
  });

  return (
    <div>
      <div>
        <h3>Staff</h3>
      </div>
      <Row gutter={[40, 16]}>{staffCards}</Row>
    </div>
  );
};

interface OverviewProps {
  generalInformation: AnimeResponse;
  characters: AnimeCharacter[];
  staff: AnimeStaff[];
  status: AnimeScoreData;
}

export const Overview = (props: OverviewProps) => {
  const { generalInformation, characters, status, staff } = props;

  return (
    <Row gutter={[24, 16]} justify="center" style={{ marginTop: '20px' }}>
      <GeneralInformation data={generalInformation} />
      <Col span={14}>
        <Row gutter={[12, 12]} justify="center" style={{ width: '100%' }}>
          <SixCharacters data={characters} />
        </Row>
        <Row gutter={[12, 12]} justify="center" style={{ marginTop: '20px' }}>
          <ThreeStaffCards data={staff} />
        </Row>
        <Row gutter={[12, 12]} justify="center" style={{ marginTop: '20px' }}>
          <StatusDistribution data={status} />
        </Row>
      </Col>
    </Row>
  );
};
