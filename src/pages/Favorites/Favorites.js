import React, { useContext } from 'react';
import { View, FlatList, Button } from 'react-native';
import { MarvelContext } from '../../context/MarvelProvider';
import LottieView from 'lottie-react-native';
import styles from './Favorites.styles';
import FavoriteCard from '../../components/CharacterCards/FavoriteCard';
import routes from '../../Navigation/routes';
import { useNavigation } from '@react-navigation/core';


export default function Favorites() {
  const { state } = useContext(MarvelContext);

  const renderFavorite = ({ item }) => (<FavoriteCard hero={item} mode={state.mode} favoriteHeroes={state.favoriteHeroes} />);

  const navigation = useNavigation();

  /* const handleNavigation=()=> {
    navigation.navigate(routes.FAVORITE_COMICS_PAGE, {})
  } */
  return (
    <View style={styles.container}>
      <Button title='button' onPress={() => navigation.navigate(routes.FAVORITE_COMICS_PAGE)} />
      {state.favoriteHeroes.length === 0 ? (
        <LottieView
          style={styles.lottie}
          source={require('../../assets/empty.json')}
          autoPlay
          loop
        />
      ) : (

        <FlatList
          style={styles.container}
          data={state.favoriteHeroes}
          renderItem={renderFavorite}
          keyExtractor={item => item.id}
          initialNumToRender={6}

        />
      )}
    </View>
  );
}
