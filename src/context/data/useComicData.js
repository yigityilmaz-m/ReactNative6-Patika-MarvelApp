import {useState , useEffect} from 'react'
import axios from 'axios'


export default function useComicData() {

    const url = `https://gateway.marvel.com/v1/public/comics?limit=100&ts=100&apikey=efcbf1c5b56e5c77cf9bb79cb4a164be&hash=8ad8de2dec0d80436a3ec5414494217c`;

    const [comics, setComics] = useState([])
    const [comicError, setComicError] = useState()
    const [comicLoading, setComicLoading] = useState(true)


    async function fetchComics(){

        try {
            let comicData = await axios.get(url)
            setComics(comicData.data.data.results)
        
        } catch (error) {
            setComicError(error)
        } finally {
            setComicLoading(false)
        }
    
      
    }

    useEffect(() => {
        fetchComics()
    }, [])


    return {
        comics , comicError , comicLoading , fetchComics
    }
}
