import rp from 'request-promise';
import _ from 'lodash';

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
    },
  ];
}

export interface AnimeAndMangaResponse {
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

export async function getAnime(title: string): Promise<AnimeAndMangaResponse[]> {
  const options = {
    url: `https://api.jikan.moe/v3/search/anime?q=${title}&page=1&limit=6`,
    json: true,
  };
  const response: RawResponse = await rp(options);
  return response.results;
}

export async function getManga(title: string): Promise<AnimeAndMangaResponse[]> {
  const options = {
    url: `https://api.jikan.moe/v3/search/manga?q=${title}&page=1&limit=6`,
    json: true,
  };
  const response: RawResponse = await rp(options);
  return response.results;
}

export async function search(title: string): Promise<AnimeAndMangaResponse[]> {
  return Promise.all([getAnime(title), getManga(title)]).then((resps) => {
    return _.flatten(resps);
  });
}
