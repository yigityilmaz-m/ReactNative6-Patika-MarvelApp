import React, { useState, useContext } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './ComicDetail.styles';
import { MarvelContext } from '../../context/MarvelProvider';
import Star from '../../components/Star'
import { textbyLanguage } from '../../context/actions';
import OpenURLButton from '../../components/OpenURLButton';

export default function ComicDetail({ route }) {
  const { state } = useContext(MarvelContext);
  const { comic } = route.params;

  const [comicImageUrl] = useState(
    `${comic.thumbnail.path + '.' + comic.thumbnail.extension}`,
  );

  const [detailsURL] = useState(`${comic.urls[0].url}`);
  return (
    <View style={styles[state.mode].container}>
      <Image
        style={styles[state.mode].imageStyle}
        source={{ uri: comicImageUrl }}
      />
      <View style={styles[state.mode].hearderStyle}><Text style={styles[state.mode].titleStyle}>{comic.title}</Text>{state.favoriteComics && <Star comic={comic} />}</View>

      <View style={styles[state.mode].viewStyle}>
        <Text style={styles[state.mode].titleStyle}>{textbyLanguage('page', state.language)}:</Text>
        <Text style={styles[state.mode].descriptionStyle}>
          {comic.pageCount}
        </Text>
      </View>
      <View style={styles[state.mode].viewStyle}>
        <Text style={styles[state.mode].titleStyle}>{textbyLanguage('price', state.language)}:</Text>
        <Text style={styles[state.mode].descriptionStyle}>
          {comic.prices[0].price}$
        </Text>
      </View>
      <OpenURLButton url={detailsURL}>
        {textbyLanguage('see_details', state.language)}
      </OpenURLButton>
      <View>
        <Text style={styles[state.mode].titleStyle}>{textbyLanguage('characters', state.language)}</Text>
        {comic.characters.items.map((char, idx) => (
          <Text style={styles[state.mode].characterNameStyle} key={idx}>
            {char.name}
          </Text>
        ))}
      </View>

    </View>
  );
}
