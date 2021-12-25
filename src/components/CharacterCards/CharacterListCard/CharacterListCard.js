import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './CharacterList.styles';
import { setFavoriteHeroList } from './../../../context/actions';

const CharacterListCard = ({hero, mode}) => {

  const [heroImageUrl] = useState(
    `${hero.thumbnail.path + '.' + hero.thumbnail.extension}`,
  );

 

  return (


    <View style={styles[mode].cardStyle}>
      <Image style={styles[mode].imageStyle} source={{uri: heroImageUrl}} />
      <View style={styles[mode].titleStyle}>
        <Text style={styles[mode].textStyle}>{hero.name}</Text>
      </View>
    </View>
  );
};

export default CharacterListCard;
