import React, {useState, useContext} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import CharacterListCard from '../../components/CharacterCards/CharacterListCard';
import routes from '../../Navigation/routes';
import {useNavigation} from '@react-navigation/core';
import useHeroData from '../../context/data/useHeroData';
import Search from './../../components/Search/Search';
import LottieView from 'lottie-react-native';
import styles from './List.styles';
import {MarvelContext} from './../../context/MarvelProvider';

export default function List() {
  const navigation = useNavigation();

  const {state} = useContext(MarvelContext);


  const {fetchHeroes, heroLoading, heroes} = useHeroData();


  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.cardContainerStyles}
      onPress={() => navigation.navigate(routes.DETAIL_PAGE, {hero: item})}>
      <CharacterListCard hero={item} mode={state.mode} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {!heroLoading ? (
        <View style={styles.container}>
          <Search
          fetchHeroes={fetchHeroes}
          />
         
          <FlatList
            style={styles.flatListStyles}
            data={heroes}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            initialNumToRender={5}
          />
        </View>
      ) : (
        <LottieView
          source={require('../../assets/iron-man.json')}
          autoPlay
          loop
        />
      )}
    </View>
  );
}
