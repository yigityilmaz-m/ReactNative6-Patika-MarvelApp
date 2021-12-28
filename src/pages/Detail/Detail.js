import React, {useState, useContext, useCallback} from 'react';
import {View, Text, Button, Image, Linking, ScrollView} from 'react-native';
import useComicData from '../../context/data/useComicData';
import {MarvelContext} from '../../context/MarvelProvider';
import {textbyLanguage} from '../../context/actions';
import styles from './Detail.styles';
import Heart from '../../components/Heart';
import ComicCard from './../../components/CharacterCards/ComicCard';
import OpenURLButton from '../../components/OpenURLButton';

export default function Detail({route}) {
  const {hero} = route.params;
  const {state} = useContext(MarvelContext);
  const url = `https://gateway.marvel.com:443/v1/public/comics?characters=${hero.id}&limit=10&ts=100&apikey=19f6801ac64190c329f1fa52d50debb9&hash=10057e70e0a2ae9b702782a71cd5cf8a`;
  const {comics, comicLoading} = useComicData(url);

  const [detailsURL] = useState(`${hero.urls[1].url}`);

  const [heroImageUrl] = useState(
    `${hero.thumbnail.path + '.' + hero.thumbnail.extension}`,
  );

  // const OpenURLButton = ({url, children}) => {
  //   const handlePress = useCallback(async () => {
  //     const supported = await Linking.canOpenURL(url);

  //     if (supported) {
  //       await Linking.openURL(url);
  //     } else {
  //       Alert.alert(`Don't know how to open this URL: ${url}`);
  //     }
  //   }, [url]);

  //   return (
  //     <Button
  //       color={state.mode === 'dark' ? '#841584' : '#FCBF49'}
  //       title={children}
  //       onPress={handlePress}
  //     />
  //   );
  // };
  return (
    <View style={styles[state.mode].container}>
      <Image
        style={styles[state.mode].imageStyle}
        source={{uri: heroImageUrl}}
      />
      <View style={styles[state.mode].heartView}>
        <Text style={styles[state.mode].titleStyle}>{hero.name}</Text>
        {state.favoriteHeroes && <Heart hero={hero} />}
      </View>
      <Text style={styles[state.mode].descriptionStyle}>
        {hero.description}
      </Text>
      <OpenURLButton url={detailsURL}>
        {textbyLanguage('see_details', state.language)}
      </OpenURLButton>
      <ScrollView horizontal style={{flex: 1}}>
        {!comicLoading &&
          comics.map((comic, idx) => {
            return <ComicCard key={idx} comic={comic} />;
          })}
      </ScrollView>
    </View>
  );
}
