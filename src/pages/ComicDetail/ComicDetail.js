import React, { useState, useContext } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './ComicDetail.styles';
import { MarvelContext } from '../../context/MarvelProvider';
import Star from '../../components/Star'

export default function ComicDetail({ route }) {
  const { state } = useContext(MarvelContext);
  const { comic } = route.params;

  const [comicImageUrl] = useState(
    `${comic.thumbnail.path + '.' + comic.thumbnail.extension}`,
  );
  return (
    <View style={styles[state.mode].container}>
      <Image
        style={styles[state.mode].imageStyle}
        source={{ uri: comicImageUrl }}
      />
      <View style={styles[state.mode].hearderStyle}><Text style={styles[state.mode].titleStyle}>{comic.title}</Text>{state.favoriteComics && <Star comic={comic} />}</View>

      <View style={styles[state.mode].viewStyle}>
        <Text style={styles[state.mode].titleStyle}>Page:</Text>
        <Text style={styles[state.mode].descriptionStyle}>
          {comic.pageCount}
        </Text>
      </View>
      <View style={styles[state.mode].viewStyle}>
        <Text style={styles[state.mode].titleStyle}>Price:</Text>
        <Text style={styles[state.mode].descriptionStyle}>
          {comic.prices[0].price}$
        </Text>
      </View>
      <View>
        <Text style={styles[state.mode].titleStyle}>Characters</Text>
        {comic.characters.items.map((char, idx) => (
          <Text style={styles[state.mode].characterNameStyle} key={idx}>
            {char.name}
          </Text>
        ))}
      </View>

    </View>
  );
}
