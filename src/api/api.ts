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

function getAnimeManga(mediumType: string, name: string): rp.RequestPromise<AnimeAndManga> {
  const options = {
    url: `https://api.jikan.moe/v3/search/${mediumType}?q=${name}&page=1&limit=4`,
    json: true
  };
  return rp(options);
}

export async function animeMangaInfo(mediumType: string, name: string) {
  const animeAndManga = await getAnimeManga(mediumType, name);
  const { mal_id, url, image_url, title, airing, synopsis, type, episodes, members, score, start_date, end_date } = animeAndManga;
  console.log(animeAndManga);
}
