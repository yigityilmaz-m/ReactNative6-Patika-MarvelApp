import React from 'react'
import { View } from 'react-native'
import ModeSwitch from '../../components/Settings/ModeSwitch'
import LanguageSelection from '../../components/Settings/LanguageSelection/LanguageSelection'
import styles from './Settings.styles'

export default function Settings() {
    return (
        <View style={styles.container}>
            <LanguageSelection/>
            <ModeSwitch/>
        </View>
    )
}
