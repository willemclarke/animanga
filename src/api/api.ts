import rp from "request-promise";

export enum MediumType {
  anime = "anime",
  manga = "manga"
}

export interface AnimeAndManga {
  mal_id: number;
  url: string;
  image_url: string;
  title: string;
  airing: boolean;
  synopsis: string;
  type: string;
  episodes: number;
  members: number;
  score: number;
  start_date: string;
  end_date: string;
}

export function getAnimeManga(type: MediumType, title: string): rp.RequestPromise<AnimeAndManga[]> {
  const options = {
    url: `https://api.jikan.moe/v3/search/${type}?q=${title}&page=1&limit=5`,
    json: true
  };
  return rp(options);
}
