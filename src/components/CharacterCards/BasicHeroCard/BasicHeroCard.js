import React, { useState, useEffect } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './BasicHeroCard.styles'

export default function BasicHeroCard({ hero }) {

    const [heroImageUrl] = useState(
        `${hero.thumbnail.path + '.' + hero.thumbnail.extension}`,
    );
        
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={{ uri: heroImageUrl }} resizeMode="contain" >
                <View style={styles.headerView}>
                    <Text style={styles.headerText}>{hero.name}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}
