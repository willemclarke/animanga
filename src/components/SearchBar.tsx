import React from "react";

import { MediumType } from "../api/api";
import { Button } from "antd";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

interface Props {
  setTitle: (v: string) => void;
  onClick: (MediumType: MediumType) => Promise<void>;
}

export const SearchBar = (props: Props): JSX.Element => {
  const { setTitle, onClick } = props;
  return (
    <div>
      <Input
        placeholder="Search anime/manga here"
        style={{ width: "300px" }}
        onChange={(event: React.FormEvent<HTMLInputElement>) => setTitle(event.currentTarget.value)}
      />
      <Button
        type="primary"
        icon={<SearchOutlined />}
        onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => onClick(MediumType.anime)}
      >
        Search Anime
      </Button>
      <Button
        type="primary"
        icon={<SearchOutlined />}
        onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => onClick(MediumType.manga)}
      >
        Search Manga
      </Button>
    </div>
  );
};
