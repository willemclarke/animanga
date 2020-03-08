import rp from "request-promise";

export enum MediumType {
  anime = "anime",
  manga = "manga"
}

interface RawResponse {
  results: [
    {
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
  ];
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

export async function getAnimeManga(type: MediumType, title: string): Promise<AnimeAndManga[]> {
  const options = {
    url: `https://api.jikan.moe/v3/search/${type}?q=${title}&page=1&limit=6`,
    json: true
  };
  const response: RawResponse = await rp(options);
  return response.results;
}
