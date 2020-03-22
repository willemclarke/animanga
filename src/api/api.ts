import rp from 'request-promise';
import _ from 'lodash';

// Search related API request interfaces:
export interface AnimeAndMangaResponse {
  mal_id: number;
  url: string;
  image_url: string;
  title: string;
  airing: boolean;
  synopsis: string;
  type: string;
  episodes?: number | undefined;
  chapters?: number | undefined;
  volumes?: number | undefined;
  score: number;
  start_date: string;
  end_date: string;
  members: number;
  rated: string;
}

interface AnimeResponse {
  mal_id: number;
  url: string;
  image_url: string;
  title: string;
  airing: boolean;
  synopsis: string;
  type: string;
  episodes: number;
  score: number;
  start_date: string;
  end_date: string;
  members: number;
  rated: string;
}

interface MangaResponse {
  mal_id: number;
  url: string;
  image_url: string;
  title: string;
  publishing: boolean;
  synopsis: string;
  type: string;
  chapters: number;
  volumes: number;
  score: number;
  start_date: string;
  end_date: string;
  members: number;
}

// Search related API requests:
export async function getAnime(title: string): Promise<AnimeAndMangaResponse[]> {
  const options = {
    url: `https://api.jikan.moe/v3/search/anime?q=${title}&page=1&limit=6`,
    json: true,
  };
  const response = await rp(options);
  return response.results;
}

export async function getManga(title: string): Promise<AnimeAndMangaResponse[]> {
  const options = {
    url: `https://api.jikan.moe/v3/search/manga?q=${title}&page=1&limit=6`,
    json: true,
  };
  const response = await rp(options);
  return response.results;
}

export async function search(title: string): Promise<AnimeAndMangaResponse[]> {
  return Promise.all([getAnime(title), getManga(title)]).then((resps) => {
    return _.flatten(resps);
  });
}

// Anime specific requests:
export async function getAnimeData(id: number): Promise<any> {
  const options = {
    url: `https://api.jikan.moe/v3/anime/${id}/`,
    json: true,
  };
  const response = await rp(options);
  return response;
}

export async function getAnimeCharacters(id: number): Promise<any> {
  const options = {
    url: `https://api.jikan.moe/v3/anime/${id}/characters_staff`,
    json: true,
  };
  const response = await rp(options);
  return response.characters;
}

export async function getAnimeScoreInfo(id: number): Promise<any> {
  const options = {
    url: `https://api.jikan.moe/v3/anime/${id}/stats`,
    json: true,
  };
  const response = await rp(options);
  return response.scores;
}

export async function getAnimeReviews(id: number): Promise<any> {
  const options = {
    url: `https://api.jikan.moe/v3/anime/${id}/reviews`,
    json: true,
  };
  const response = await rp(options);
  return response.reviews;
}

// Manga specific requests:
export async function getMangaData(id: number): Promise<any> {
  const options = {
    url: `https://api.jikan.moe/v3/manga/${id}/`,
    json: true,
  };
  const response = await rp(options);
  return response;
}

export async function getMangaCharacters(id: number): Promise<any> {
  const options = {
    url: `https://api.jikan.moe/v3/manga/${id}/characters`,
    json: true,
  };
  const response = await rp(options);
  return response;
}

export async function getMangaScoreInfo(id: number): Promise<any> {
  const options = {
    url: `https://api.jikan.moe/v3/manga/${id}/stats`,
    json: true,
  };
  const response = await rp(options);
  return response.scores;
}

export async function getMangaReviews(id: number): Promise<any> {
  const options = {
    url: `https://api.jikan.moe/v3/manga/${id}/reviews`,
    json: true,
  };
  const response = await rp(options);
  return response.reviews;
}
