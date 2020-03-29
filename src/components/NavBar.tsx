import React from 'react';
import _ from 'lodash';
import { Input, Layout } from 'antd';
import { StringParam, useQueryParam } from 'use-query-params';
import { Link } from 'react-router-dom';

const BrandNav = () => {
  return (
    <Link to="/">
      <span
        style={{
          color: 'white',
          fontSize: '1.25rem',
          fontWeight: 700,
          marginRight: '1rem',
          float: 'left',
        }}
      >
        Animanga
      </span>
    </Link>
  );
};

const SearchNav = () => {
  const [searchTerm, setSearchTerm] = useQueryParam('search', StringParam);

  const onSearch = _.debounce((value: string) => {
    setSearchTerm(value);
  }, 500);

  return (
    <Input
      defaultValue={searchTerm}
      onChange={(event) => onSearch(event.target.value)}
      placeholder="Anime and manga"
      style={{ width: '200px' }}
    />
  );
};

export const NavBar = () => {
  return (
    <Layout.Header>
      <BrandNav />
      <SearchNav />
    </Layout.Header>
  );
};
