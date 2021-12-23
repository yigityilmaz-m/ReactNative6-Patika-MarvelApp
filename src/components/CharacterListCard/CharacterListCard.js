import React from 'react';
import {View, Text} from 'react-native';
import styles from './CharacterList.styles';
const CharacterListCard = props => {
 
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.name}>{props.name}</Text>
      </View>
    </View>
  );
};

export default CharacterListCard;