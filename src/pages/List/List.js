import React, {useState, useEffect, useContext} from 'react';
import {View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';
import axios from 'axios';
import CharacterListCard from '../../components/CharacterListCard/CharacterListCard';
import routes from '../../Navigation/routes';
import {useNavigation, useRoute} from '@react-navigation/core';
import {MarvelContext} from '../../context/MarvelProvider';
import {getHeroesFromApi, getComicsFromApi} from '../../context/actions';
import useHeroData from '../../context/data/useHeroData';
import useComicData from '../../context/data/useComicData';

export default function List() {
  const {state, dispatch} = useContext(MarvelContext);
  const navigation = useNavigation();
  
  const [searchValue, setSearchValue] = useState('');

  const {fetchHeroes, heroLoading, heroError, heroes} = useHeroData();

  function handleHeroSearch() {
    console.log('yes');
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchValue}&orderBy=name&ts=100&apikey=efcbf1c5b56e5c77cf9bb79cb4a164be&hash=8ad8de2dec0d80436a3ec5414494217c`;
    if (searchValue==='') {
      fetchHeroes();
      return;
    }
    fetchHeroes(url);
  }

  const renderItem = ({item}) => (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.DETAIL_PAGE, {hero: item})}>
        <CharacterListCard name={item.name} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <TextInput
        placeholder="Search a Hero"
        onChangeText={setSearchValue}
        onSubmitEditing={handleHeroSearch}
        value={searchValue}
      />
      {!heroLoading && (
        <FlatList
          style={{flex: 10}}
          style={{backgroundColor: 'bdbdbd'}}
          data={heroes}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
}
