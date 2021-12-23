import React, {useState, useEffect , useContext } from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';
import CharacterListCard from '../../components/CharacterListCard/CharacterListCard';
import routes from '../../Navigation/routes';
import {useNavigation, useRoute} from '@react-navigation/core';
import { MarvelContext } from '../../context/MarvelProvider';
import {getHeroesFromApi , getComicsFromApi} from '../../context/actions'
import useHeroData from '../../context/data/useHeroData';
import useComicData from '../../context/data/useComicData';

export default function List() {

  const {state, dispatch} = useContext(MarvelContext);
  const navigation = useNavigation();
  const route = useRoute();
  
  // const [character, setCharacter] = useState([]);
  
  // async function fetchData() {
  //   const url = `https://gateway.marvel.com/v1/public/characters?limit=100&ts=100&apikey=efcbf1c5b56e5c77cf9bb79cb4a164be&hash=8ad8de2dec0d80436a3ec5414494217c`;
  //   const response = await axios.get(url);
  //   setCharacter(response.data.data.results);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const heroData = useHeroData();
  // const comicData = useComicData();



  
    useEffect(() => {
      if(!heroData.loading){
        getHeroesFromApi(heroData , dispatch);
      }
   
  }, [heroData.loading]);

  useEffect(() => {
    console.log(state)
}, [state]);




  const renderItem = ({item}) => (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.DETAIL_PAGE, item)}>
        <CharacterListCard name={item.name} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{backgroundColor: 'bdbdbd'}}
        data={state.heroList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
