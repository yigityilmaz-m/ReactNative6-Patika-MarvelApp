import React, { useState, useContext, useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { setFavoriteComicList } from '../../context/actions';
import styles from './Star.styles';
import { MarvelContext } from '../../context/MarvelProvider';
import { isFavorited } from '../../context/actions';

export default function Star({ comic }) {
  const { state, dispatch } = useContext(MarvelContext);

  const [isFavoritedComic, setIsFavoritedComic] = useState(false);

  const handleFavorite = () => {
    setFavoriteComicList(comic, dispatch);
    setIsFavoritedComic(prevState => !prevState);
  };
  useEffect(() => {
    setIsFavoritedComic(isFavorited(comic, state.favoriteComics));
  }, []);

  return (
    <Icon
      name={isFavoritedComic ? 'star' : 'staro'}
      size={30}
      style={styles.starStyle}
      onPress={handleFavorite}
    />
  );
}
