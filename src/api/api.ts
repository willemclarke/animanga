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
  status: string; //eg "Finished Airing"
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
      name: string; //E.g. production I.G.
      url: string;
    },
  ];
  genres: [
    {
      name: string; //e.g. Action
      url: string;
    },
  ];
}

export interface AnimeCharacters {
  characters: [
    {
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
    },
  ];
  staff: [
    {
      url: string;
      name: string;
      image_url: string;
      positions: string[];
    },
  ];
}

interface AnimeScoreData {
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

interface AnimeReviews {
  [review: number]: {
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
        emjoyment: number;
      };
    };
  };
}

// Manga related interfaces:
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
export async function getAnimeData(id: number): Promise<AnimeResponse> {
  const options = {
    url: `https://api.jikan.moe/v3/anime/${id}`,
    json: true,
  };
  const response = await rp(options);
  return response;
}

export async function getAnimeCharacters(id: number): Promise<AnimeCharacters> {
  const options = {
    url: `https://api.jikan.moe/v3/anime/${id}/characters_staff`,
    json: true,
  };
  const response = await rp(options);
  return response;
}

export async function getAnimeScoreInfo(id: number): Promise<AnimeScoreData> {
  const options = {
    url: `https://api.jikan.moe/v3/anime/${id}/stats`,
    json: true,
  };
  const response = await rp(options);
  return response;
}

export async function getAnimeReviews(id: number): Promise<AnimeScoreData> {
  const options = {
    url: `https://api.jikan.moe/v3/anime/${id}/reviews`,
    json: true,
  };
  const response = await rp(options);
  return response.reviews;
}

// Manga specific requests:
export async function getMangaData(id: number): Promise<MangaResponse> {
  const options = {
    url: `https://api.jikan.moe/v3/manga/${id}`,
    json: true,
  };
  return await rp(options);
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
