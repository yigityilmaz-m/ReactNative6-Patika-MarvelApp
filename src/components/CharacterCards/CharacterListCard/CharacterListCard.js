import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import styles from './CharacterList.styles';

const CharacterListCard = ({hero, mode}) => {

  const [heroImageUrl] = useState(
    `${hero.thumbnail.path + '.' + hero.thumbnail.extension}`,
  );




  return (
    // <Card style={styles.cardStyle} isDark={mode==="dark"?true:false}>
    //   <CardImage
    //    source={{
    //     uri:
    //     heroImageUrl,
    //   }}
    //   style={styles.imageStyle}
    //   />
    //   <CardTitle style={styles.titleStyle}
    //   title={hero.name}
    // />
    // </Card>

    <View style={styles[mode].cardStyle}>
      <Image style={styles[mode].imageStyle} source={{uri: heroImageUrl}} />
      <View style={styles[mode].titleStyle}>
        <Text style={styles[mode].textStyle}>{hero.name}</Text>
      </View>
    </View>
  );
};

export default CharacterListCard;
