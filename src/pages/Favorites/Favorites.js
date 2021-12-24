import React, {useContext, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {MarvelContext} from '../../context/MarvelProvider';
import {getFavoritedHeroesList} from '../../context/actions';

export default function Favorites() {

  const {state, dispatch} = useContext(MarvelContext);

  useEffect(() => {
    getFavoritedHeroesList(dispatch)
  }, []);

  return (
    <View>
      {
        state.favoriteHeroes.map((hero, idx) => {
          return <Text key={idx}>{hero.name}</Text>;
        })}
    </View>
  );
}
