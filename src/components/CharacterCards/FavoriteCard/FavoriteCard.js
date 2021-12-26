import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import styles from './FavoriteCard.styles';
import Heart from '../../Heart'

export default function FavoriteCard({hero , mode }) {

    const [heroImageUrl] = useState(
        `${hero.thumbnail.path + '.' + hero.thumbnail.extension}`,
      );
    return (
        <View style={styles[mode].cardStyle}>
            <Image style={styles[mode].imageStyle} source={{uri: heroImageUrl}}/>
            <View style={styles[mode].textContainerStyle}>
                <Text style={styles[mode].titleStyle}>{hero.name}</Text>
                <Text style={styles[mode].descriptionStyle}>{hero.description}</Text>
            </View>
            <View style={styles[mode].heartContainerStyle}>
            <Heart hero = {hero} />
            </View>
        </View>
    )
}
