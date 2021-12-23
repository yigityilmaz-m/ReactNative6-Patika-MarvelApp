import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import axios from 'axios';
import CharacterListCard from '../../components/CharacterListCard/CharacterListCard';
import routes from '../../navigation/routes';
import {useNavigation, useRoute} from '@react-navigation/core';

export default function List() {
  const [character, setCharacter] = useState([]);
  const navigation = useNavigation();
  const route = useRoute();

  async function fetchData() {
    const url = `https://gateway.marvel.com/v1/public/characters?limit=100&ts=100&apikey=efcbf1c5b56e5c77cf9bb79cb4a164be&hash=8ad8de2dec0d80436a3ec5414494217c`;
    const response = await axios.get(url);
    setCharacter(response.data.data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

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
        data={character}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
