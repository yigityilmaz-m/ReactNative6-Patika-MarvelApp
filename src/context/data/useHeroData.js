import {useState, useEffect} from 'react';
import axios from 'axios';

export default function useHeroData(
  url = 'https://gateway.marvel.com:443/v1/public/characters?events=310&orderBy=name&ts=100&apikey=efcbf1c5b56e5c77cf9bb79cb4a164be&hash=8ad8de2dec0d80436a3ec5414494217c',
) {
  /* const url = `https://gateway.marvel.com:443/v1/public/characters?events=310&orderBy=name&ts=100&apikey=efcbf1c5b56e5c77cf9bb79cb4a164be&hash=8ad8de2dec0d80436a3ec5414494217c`;
  const url1 = `https://gateway.marvel.com/v1/public/characters?limit=100&ts=100&apikey=efcbf1c5b56e5c77cf9bb79cb4a164be&hash=8ad8de2dec0d80436a3ec5414494217c`; */

  const [heroes, setHeroes] = useState([]);
  const [heroError, setHeroError] = useState();
  const [heroLoading, setHeroLoading] = useState(true);

  async function fetchHeroes(
    url = 'https://gateway.marvel.com:443/v1/public/characters?events=310&orderBy=name&ts=100&apikey=efcbf1c5b56e5c77cf9bb79cb4a164be&hash=8ad8de2dec0d80436a3ec5414494217c',
  ) {
    try {
      let heroData = await axios.get(url);
      setHeroes(heroData.data.data.results);
    } catch (error) {
      setHeroError(error);
    } finally {
      setHeroLoading(false);
    }
  }

  useEffect(() => {
    fetchHeroes();
  }, []);

  return {
    heroes,
    heroError,
    heroLoading,
    fetchHeroes,
  };
}
