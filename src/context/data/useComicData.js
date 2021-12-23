import {useState, useEffect} from 'react';
import axios from 'axios';

export default function useComicData(url) {
  const [comics, setComics] = useState([]);
  const [comicError, setComicError] = useState();
  const [comicLoading, setComicLoading] = useState(true);

  async function fetchComics(url) {
    try {
      let comicData = await axios.get(url);
      setComics(comicData.data.data.results);
    } catch (error) {
      setComicError(error);
    } finally {
      setComicLoading(false);
    }
  }

  useEffect(() => {
    fetchComics(url);
  }, []);

  return {
    comics,
    comicError,
    comicLoading,
    fetchComics,
  };
}
