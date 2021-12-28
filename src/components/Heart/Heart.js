import React, { useState, useContext, useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { setFavoriteHeroList } from '../../context/actions';
import styles from './Heart.styles';
import { MarvelContext } from '../../context/MarvelProvider';
import { isFavorited } from '../../context/actions';

export default function Heart({ hero }) {
  const { state, dispatch } = useContext(MarvelContext);

  const [isFavoritedHero, setIsFavoritedHero] = useState(false);

  const handleFavorite = () => {
    setFavoriteHeroList(hero, dispatch);
    setIsFavoritedHero(prevState => !prevState);
  };
  useEffect(() => {
    setIsFavoritedHero(isFavorited(hero, state.favoriteHeroes));

  }, []);

  return (
    <Icon
      name={isFavoritedHero ? 'heart' : 'hearto'}
      size={30}
      style={styles.heartStyle}
      onPress={handleFavorite}
    />
  );
}
