import React, {useState} from 'react';

import {Card} from 'react-native-elements';
import styles from './CharacterList.styles';

const CharacterListCard = ({hero}) => {
  const [heroImageUrl , setHeroImageUrl] = useState(`${hero.thumbnail.path+"."+hero.thumbnail.extension}`)

  return (
    <Card style={styles.cardStyle}>
      <Card.Image
      style={styles.imageStyle}
       source={{
        uri:
        heroImageUrl,
      }}/>
      <Card.Title style={styles.titleStyle}>{hero.name}</Card.Title>
    </Card>
  );
};

export default CharacterListCard;
