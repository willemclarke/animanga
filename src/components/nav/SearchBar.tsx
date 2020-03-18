import React from "react";
import { MediumType } from "../../api/api";
import { Button } from "antd";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export interface SearchBarProps {
  setTitle: (v: string) => void;
  searchTitle: (MediumType: MediumType) => Promise<void>;
}

export const SearchBar = (props: SearchBarProps): JSX.Element => {
  const { setTitle, searchTitle } = props;
  return (
    <span>
      <Input
        placeholder="Search anime/manga here"
        style={{ width: "300px" }}
        onChange={(event: React.FormEvent<HTMLInputElement>) => setTitle(event.currentTarget.value)}
      />
      <Button
        type="primary"
        icon={<SearchOutlined />}
        onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => searchTitle(MediumType.anime)}
      >
        Search Anime
      </Button>
      <Button
        type="primary"
        icon={<SearchOutlined />}
        onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => searchTitle(MediumType.manga)}
      >
        Search Manga
      </Button>
    </span>
  );
};
