import React, { useContext } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { MarvelContext } from '../../context/MarvelProvider';
import LottieView from 'lottie-react-native';
import styles from './FavoriteComics.styles';
import routes from '../../Navigation/routes';
import { useNavigation } from '@react-navigation/native';
import FavoriteComicCard from '../../components/CharacterCards/FavoriteComicCard';
import { textbyLanguage } from '../../context/actions';

export default function FavoriteComics() {
  const { state } = useContext(MarvelContext);
  const navigation = useNavigation()

  const renderFavorite = ({ item }) => (<FavoriteComicCard comic={item} mode={state.mode}/>);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
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
      <View style={styles.buttonPosition}>
        <Button style={styles.buttonStyles} color={state.mode === 'dark' ? '#841584' : '#FCBF49'} title={textbyLanguage('heroes',state.language)} onPress={() => navigation.navigate(routes.FAVORITES_PAGE)} />
      </View>

    </View>
  );
}
