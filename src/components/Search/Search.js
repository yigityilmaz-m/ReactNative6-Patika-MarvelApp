import React,{useState} from 'react'
import { TextInput } from 'react-native'
import useHeroData from '../../context/data/useHeroData';

export default function Search() {

    const [searchValue, setSearchValue] = useState("")

    const {fetchHeroes} = useHeroData();

    function handleHeroSearch() {
        const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchValue}&orderBy=name&ts=100&apikey=efcbf1c5b56e5c77cf9bb79cb4a164be&hash=8ad8de2dec0d80436a3ec5414494217c`;
        if (searchValue==='') {
          fetchHeroes();
          return;
        }
        fetchHeroes(url);
      }
    


    return (
        <TextInput
        placeholder="Search a Hero"
        onChangeText={setSearchValue}
        onSubmitEditing={handleHeroSearch}
        value={searchValue}
      />
    )
}
