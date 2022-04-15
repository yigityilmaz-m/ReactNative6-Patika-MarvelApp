import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './ComicDetail.styles';
import { MarvelContext } from '../../context/MarvelProvider';
import Star from '../../components/Star'
import { textbyLanguage } from '../../context/actions';
import OpenURLButton from '../../components/OpenURLButton';
import BasicHeroCard from '../../components/CharacterCards/BasicHeroCard';
import useComicHeroData from '../../context/data/useComicHeroData';


export default function ComicDetail({ route }) {
  const { state } = useContext(MarvelContext);
  const { comic } = route.params;
  const { comicHeroes, comicHeroLoading } = useComicHeroData(comic.id);




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
      <View style={styles[state.mode].scrollViewStyle}>
        <Text style={styles[state.mode].titleStyle}>{textbyLanguage('characters', state.language)}</Text>
        <ScrollView horizontal style={styles[state.mode].scrollViewStyle}>{!comicHeroLoading && comicHeroes.map((hero, idx) => (<BasicHeroCard hero={hero} key={idx} />
        ))}</ScrollView>
      </View>

    </View>
  );
}
