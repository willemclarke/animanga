import rp from "request-promise";
import * as _ from "lodash";

interface AnimeAndManga {
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

export function getAnimeManga(type: string, title: string): rp.RequestPromise<AnimeAndManga[]> {
  const options = {
    url: `https://api.jikan.moe/v3/search/${type}?q=${title}&page=1?limit=4`,
    json: true
  };
  return rp(options);
}

export async function animeMangaInfo(type: string, title: string) {
  const animeAndManga = await getAnimeManga(type, title);
}
