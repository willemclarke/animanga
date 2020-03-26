import rp from 'request-promise';
import _ from 'lodash';

// Search related API request interfaces:
export interface SearchAnimeAndMangaResponse {
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

interface GetAnimeResponse {
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
    'Side Story': [
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

interface GetMangaResponse {
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
export async function getAnime(title: string): Promise<SearchAnimeAndMangaResponse[]> {
  const options = {
    url: `https://api.jikan.moe/v3/search/anime?q=${title}&page=1&limit=6`,
    json: true,
  };
  const response = await rp(options);
  return response.results;
}

export async function getManga(title: string): Promise<SearchAnimeAndMangaResponse[]> {
  const options = {
    url: `https://api.jikan.moe/v3/search/manga?q=${title}&page=1&limit=6`,
    json: true,
  };
  const response = await rp(options);
  return response.results;
}

export async function search(title: string): Promise<SearchAnimeAndMangaResponse[]> {
  return Promise.all([getAnime(title), getManga(title)]).then((resps) => {
    return _.flatten(resps);
  });
}

// Anime specific requests:
export async function getAnimeData(id: number): Promise<GetAnimeResponse> {
  const options = {
    url: `https://api.jikan.moe/v3/anime/${id}`,
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
export async function getMangaData(id: number): Promise<GetMangaResponse> {
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
