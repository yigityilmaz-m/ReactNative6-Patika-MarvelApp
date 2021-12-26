import React, {useState} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import styles from './ComicCard.styles'

export default function ComicCard({comic}) {
  const [comicImageUrl] = useState(
    `${comic.thumbnail.path + '.' + comic.thumbnail.extension}`,
  );

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={{uri: comicImageUrl}} resizeMode="contain">
        <View style={styles.headerView}>
          <Text style={styles.headerText}>{comic.title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
