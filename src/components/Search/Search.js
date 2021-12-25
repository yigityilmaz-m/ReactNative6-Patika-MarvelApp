import React, {useState} from 'react';
import {TextInput , View} from 'react-native';
import styles from './Search.styles';
import I18n from '../../lang/_i18n'


export default function Search({setSearchValue ,  searchValue  , handleHeroSearch}) {

  const handleChangeText = (text) => {
    setSearchValue(text)
  }
  const handleSumbmit = () => {
    handleHeroSearch()
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={I18n.t('search_placeholder')}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSumbmit}
        value={searchValue}
      />
    </View>
  );
}
