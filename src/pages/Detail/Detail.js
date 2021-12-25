import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import useComicData from '../../context/data/useComicData';
import { MarvelContext } from '../../context/MarvelProvider';
import {setFavoriteHeroList} from '../../context/actions';
import { textbyLanguage } from '../../context/actions';

export default function Detail({route}) {
  const {hero} = route.params;
  const {state,dispatch} = useContext(MarvelContext);
  const url = `https://gateway.marvel.com:443/v1/public/comics?characters=${hero.id}&limit=10&ts=100&apikey=efcbf1c5b56e5c77cf9bb79cb4a164be&hash=8ad8de2dec0d80436a3ec5414494217c`;
  const {comics, comicLoading} = useComicData(url);


 function handleFavorites() {
    setFavoriteHeroList(hero ,  dispatch)

 }
  
  return (
    <View>
      <Text>{hero.name}</Text>
      <Text>{hero.id}</Text>
      {!comicLoading &&
        comics.map((comic, idx) => {
          return <Text key={idx}> {comic.title} </Text>;
        })}
    <Button title={textbyLanguage('add_to_favorites',state.language)} onPress={handleFavorites}/>
    </View>
  );
}
