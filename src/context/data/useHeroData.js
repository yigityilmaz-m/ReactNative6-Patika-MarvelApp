import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useHeroData(
  url = 'https://gateway.marvel.com:443/v1/public/characters?events=310&orderBy=name&ts=100&apikey=19f6801ac64190c329f1fa52d50debb9&hash=10057e70e0a2ae9b702782a71cd5cf8a',
) {

  const [heroes, setHeroes] = useState([]);
  const [heroError, setHeroError] = useState();
  const [heroLoading, setHeroLoading] = useState(true);
 
  async function fetchHeroes(
    url = 'https://gateway.marvel.com:443/v1/public/characters?events=310&orderBy=name&ts=100&apikey=19f6801ac64190c329f1fa52d50debb9&hash=10057e70e0a2ae9b702782a71cd5cf8a',
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
