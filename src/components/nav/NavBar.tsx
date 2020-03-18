import React, { Props } from "react";
import { Layout } from "antd";
import { SearchBar, SearchBarProps } from "./SearchBar";

export const NavBar = (props: SearchBarProps) => {
  const { setTitle, searchTitle } = props;
  return (
    <Layout style={{ height: "60px", backgroundColor: "#1F2631", fontSize: "1.2rem", color: "white" }}>
      <span>animanga-info</span>
      <SearchBar setTitle={setTitle} searchTitle={searchTitle} />
    </Layout>
  );
};
