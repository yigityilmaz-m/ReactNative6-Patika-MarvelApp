import React, { useContext } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { MarvelContext } from '../../context/MarvelProvider';
import LottieView from 'lottie-react-native';
import styles from './FavoriteComics.styles';
import FavoriteCard from '../../components/CharacterCards/FavoriteCard';
import routes from '../../Navigation/routes';
import { useNavigation } from '@react-navigation/native';

export default function FavoriteComics() {
  const { state } = useContext(MarvelContext);
  const navigation = useNavigation()

  const renderFavorite = ({ item }) => (<Text>{item.id}</Text>);

  return (
    <View style={styles.container}>
      <Button title='button' onPress={() => navigation.navigate(routes.FAVORITES_PAGE)} />
      {state.favoriteComics.length === 0 ? (
        <LottieView
          style={styles.lottie}
          source={require('../../assets/empty.json')}
          autoPlay
          loop
        />
      ) : (
        <FlatList
          style={styles.container}
          data={state.favoriteComics}
          renderItem={renderFavorite}
          keyExtractor={item => item.id}
          initialNumToRender={6}

        />
      )}

    </View>
  );
}
