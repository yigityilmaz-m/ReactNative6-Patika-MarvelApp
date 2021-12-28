import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useComicHeroData(id) {

    const [comicHeroes, setComicHeroes] = useState([]);
    const [comicHeroError, setComicHeroError] = useState();
    const [comicHeroLoading, setComicHeroLoading] = useState(true);



    async function fetchComicHero(id) {
        const url = `https://gateway.marvel.com/v1/public/comics/${id}/characters?&ts=100&apikey=19f6801ac64190c329f1fa52d50debb9&hash=10057e70e0a2ae9b702782a71cd5cf8a`;
        try {
            let heroData = await axios.get(url);
            setComicHeroes(heroData.data.data.results)
        } catch (error) {
            setComicHeroError(error);
        } finally {
            setComicHeroLoading(false);
        }
    }

    useEffect(() => {
        fetchComicHero(id);
    }, []);

    return {
        comicHeroes,
        comicHeroError,
        comicHeroLoading,
        fetchComicHero,
    };
}
