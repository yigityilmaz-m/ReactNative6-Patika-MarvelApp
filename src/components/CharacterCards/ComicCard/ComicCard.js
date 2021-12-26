import React, {useState} from 'react';
import {View, Text, Image, ImageBackground , TouchableOpacity} from 'react-native';
import styles from './ComicCard.styles'
import {useNavigation} from '@react-navigation/core';
import routes from '../../../Navigation/routes';



export default function ComicCard({comic}) {

  const navigation = useNavigation();

  const [comicImageUrl] = useState(
    `${comic.thumbnail.path + '.' + comic.thumbnail.extension}`,
  );

  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.flexStyle} onPress={() => navigation.navigate(routes.COMIC_DETAIL,{comic})}>
      <ImageBackground style={styles.image} source={{uri: comicImageUrl}} resizeMode="contain" >
        <View style={styles.headerView}>
          <Text style={styles.headerText}>{comic.title}</Text>
        </View>
      </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}
