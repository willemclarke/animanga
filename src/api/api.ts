import rp from 'request-promise';
import _ from 'lodash';

// Search related API request interfaces:
export interface AnimeListResponse {
  mal_id: number;
  image_url: string;
  title: string;
  synopsis: string;
  type: string;
}

export interface MangaListResponse {
  mal_id: number;
  image_url: string;
  title: string;
  synopsis: string;
  type: string;
}

export interface SearchResponse {
  mal_id: number;
  image_url: string;
  title: string;
  type: string;
  synopsis: string;
}

// Anime related interfaces:
export interface CombinedAnimedResponse {
  basic: AnimeResponse;
  characters: AnimeCharacter[];
  staff: AnimeStaff[];
  scoreInfo: AnimeScoreData;
  reviews: AnimeReview[];
  recommendations: AnimeRecommendation[];
}

export interface AnimeResponse {
  mal_id: number;
  url: string;
  image_url: string;
  trailer_url: string;
  title: string;
  title_japanese: string;
  type: string;
  source: string;
  episodes: number;
  airing: boolean;
  status: string;
  aired: {
    prop: {
      string: string; // nice date format
    };
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  premiered: string;
  related: {
    Adaptation: [
      {
        type: string;
        name: string;
        url: string;
      },
    ];
    Prequel?: [
      {
        type: string;
        name: string;
        url: string;
      },
    ];
    Sequel?: [
      {
        type: string;
        name: string;
        url: string;
      },
    ];
    'Side Story'?: [
      {
        type: string;
        name: string;
        url: string;
      },
    ];
  };
  producers: [
    {
      name: string;
      url: string;
    },
  ];
  licensors: [
    {
      name: string;
      url: string;
    },
  ];

  studios: [
    {
      name: string;
      url: string;
    },
  ];
  genres: [
    {
      name: string;
      url: string;
    },
  ];
}

export interface AnimeCharacter {
  url: string;
  image_url: string;
  name: string;
  role: string;
  voice_actors: [
    {
      name: string;
      url: string;
      image_url: string;
      language: string;
    },
  ];
}

export interface AnimeStaff {
  url: string;
  name: string;
  image_url: string;
  positions: string[];
}

export interface AnimeScoreData {
  watching: number;
  completed: number;
  on_hold: number;
  dropped: number;
  plan_to_watch: number;
  total: number;
  scores: {
    [rating: number]: {
      votes: number;
      percentage: number;
    };
  };
}

export interface AnimeReview {
  url: string;
  helpful_count: number;
  date: string;
  content: string;
  reviewer: {
    username: string;
    url: string;
    image_url: string;
    episodes_seen: number;
    scores: {
      overall: number;
      story: number;
      animation: number;
      sound: number;
      character: number;
      ejoyment: number;
    };
  };
}

export interface AnimeRecommendation {
  mal_id: number;
  url: string;
  image_url: string;
  recommendation_url: string;
  title: string;
  recommendation_count: number;
}

// Manga related interfaces:
export interface CombinedMangaResponse {
  basic: MangaResponse;
  characters: MangaCharacter[];
  scoreInfo: MangaScoreData;
  reviews: MangaReview[];
  recommendations: MangaRecommendation[];
}

export interface MangaResponse {
  mal_id: number;
  url: string;
  image_url: string;
  title: string;
  title_japanese: string;
  type: string;
  source: string;
  volumes: number;
  chapters: number;
  publishing: boolean;
  status: string;
  published: {
    prop: {
      string: string; // nice date format
    };
  };
  rank: number;
  score: number;
  scored_by: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  related: {
    Adaptation: [
      {
        type: string;
        name: string;
        url: string;
      },
    ];
    'Side Story': [
      {
        type: string;
        name: string;
        url: string;
      },
    ];
  };
  genres: [
    {
      name: string; //e.g. Action
      url: string;
    },
  ];
  authors: [
    {
      name: string;
      url: string;
    },
  ];
  serializations: [
    {
      name: string;
      url: string;
    },
  ];
}

export interface MangaCharacter {
  mal_id: number;
  url: string;
  image_url: string;
  name: string;
  role: string;
}

export interface MangaScoreData {
  reading: number;
  completed: number;
  on_hold: number;
  dropped: number;
  plan_to_read: number;
  total: number;
  scores: {
    [rating: number]: {
      votes: number;
      percentage: number;
    };
  };
}

export interface MangaReview {
  url: string;
  helpful_count: number;
  date: string;
  content: string;
  reviewer: {
    username: string;
    url: string;
    image_url: string;
    chapters_read: number;
    scores: {
      overall: number;
      story: number;
      animation: number;
      sound: number;
      character: number;
      emjoyment: number;
    };
  };
}

export interface MangaRecommendation {
  mal_id: number;
  url: string;
  image_url: string;
  recommendation_url: string;
  title: string;
  recommendation_count: number;
}

// Search related API requests:
export async function getAnimeList(title: string): Promise<AnimeListResponse[]> {
  const options = {
    url: `https://api.jikan.moe/v3/search/anime?q=${title}&page=1&limit=6`,
    json: true,
  };
  const response = await rp(options);
  return response.results;
}

export async function getMangaList(title: string): Promise<MangaListResponse[]> {
  const options = {
    url: `https://api.jikan.moe/v3/search/manga?q=${title}&page=1&limit=6`,
    json: true,
  };
  const response = await rp(options);
  return response.results;
}

export async function search(title: string): Promise<SearchResponse[]> {
  return Promise.all([getAnimeList(title), getMangaList(title)]).then((resps) => {
    return _.flatten(resps);
  });
}

// Anime specific requests:
export async function getCombinedAnimeData(id: number): Promise<CombinedAnimedResponse> {
  const [basic, characters, staff, scoreInfo, reviews, recommendations] = await Promise.all([
    getAnimeBasic(id),
    getAnimeCharacters(id),
    getAnimeStaff(id),
    getAnimeScoreInfo(id),
    getAnimeReviews(id),
    getAnimeRecommendations(id),
  ]);

  return {
    basic,
    characters,
    staff,
    scoreInfo,
    reviews,
    recommendations,
  };
}

export async function getAnimeBasic(id: number): Promise<AnimeResponse> {
  const options = {
    url: `https://api.jikan.moe/v3/anime/${id}`,
    json: true,
  };
  const response = await rp(options);
  return response;
}

export async function getAnimeCharacters(id: number): Promise<AnimeCharacter[]> {
  const options = {
    url: `https://api.jikan.moe/v3/anime/${id}/characters_staff`,
    json: true,
  };
  const response = await rp(options);
  return response.characters;
}

export async function getAnimeStaff(id: number): Promise<AnimeStaff[]> {
  const options = {
    url: `https://api.jikan.moe/v3/anime/${id}/characters_staff`,
    json: true,
  };
  const response = await rp(options);
  return response.staff;
}

export async function getAnimeScoreInfo(id: number): Promise<AnimeScoreData> {
  const options = {
    url: `https://api.jikan.moe/v3/anime/${id}/stats`,
    json: true,
  };
  const response = await rp(options);
  return response;
}

export async function getAnimeReviews(id: number): Promise<AnimeReview[]> {
  const options = {
    url: `https://api.jikan.moe/v3/anime/${id}/reviews`,
    json: true,
  };
  const response = await rp(options);
  return response.reviews;
}

export async function getAnimeRecommendations(id: number): Promise<AnimeRecommendation[]> {
  const options = {
    url: `https://api.jikan.moe/v3/anime/${id}/recommendations`,
    json: true,
  };
  const response = await rp(options);
  return response.recommendations;
}

// Manga specific requests:

export async function getCombinedMangaData(id: number): Promise<CombinedMangaResponse> {
  const [basic, characters, scoreInfo, reviews, recommendations] = await Promise.all([
    getMangaBasic(id),
    getMangaCharacters(id),
    getMangaScoreInfo(id),
    getMangaReviews(id),
    getMangaRecommendations(id),
  ]);

  return {
    basic,
    characters,
    scoreInfo,
    reviews,
    recommendations,
  };
}

export async function getMangaBasic(id: number): Promise<MangaResponse> {
  const options = {
    url: `https://api.jikan.moe/v3/manga/${id}`,
    json: true,
  };
  return await rp(options);
}

export async function getMangaCharacters(id: number): Promise<MangaCharacter[]> {
  const options = {
    url: `https://api.jikan.moe/v3/manga/${id}/characters`,
    json: true,
  };
  const response = await rp(options);
  return response.characters;
}

export async function getMangaScoreInfo(id: number): Promise<MangaScoreData> {
  const options = {
    url: `https://api.jikan.moe/v3/manga/${id}/stats`,
    json: true,
  };
  const response = await rp(options);
  return response;
}

export async function getMangaReviews(id: number): Promise<MangaReview[]> {
  const options = {
    url: `https://api.jikan.moe/v3/manga/${id}/reviews`,
    json: true,
  };
  const response = await rp(options);
  return response.reviews;
}

export async function getMangaRecommendations(id: number): Promise<MangaRecommendation[]> {
  const options = {
    url: `https://api.jikan.moe/v3/manga/${id}/recommendations`,
    json: true,
  };
  const response = await rp(options);
  return response.recommendations;
}
