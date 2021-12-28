import React, { useState, useContext } from 'react';
import { Image, View, Text } from 'react-native';
import styles from './FavoriteComicCard.styles';
import Star from '../../Star'
import { textbyLanguage } from '../../../context/actions';
import { MarvelContext } from '../../../context/MarvelProvider';
export default function FavoriteComicCard({ comic, mode }) {

    const { state } = useContext(MarvelContext)
    const [comicImageUrl] = useState(
        `${comic.thumbnail.path + '.' + comic.thumbnail.extension}`,
    );
    return (
        <View style={styles[mode].cardStyle}>
            <Image style={styles[mode].imageStyle} source={{ uri: comicImageUrl }} />
            <View style={styles[mode].textContainerStyle}>
                <Text style={styles[mode].titleStyle}>{comic.title}</Text>
                <Text style={styles[mode].descriptionStyle}>{textbyLanguage('page', state.language)}: {comic.pageCount}</Text>
                <Text style={styles[mode].descriptionStyle}>{textbyLanguage('price', state.language)}: {comic.prices[0].price}$</Text>
            </View>
            <View style={styles[mode].starContainerStyle}>
                <Star comic={comic} />
            </View>
        </View>
    )
}
