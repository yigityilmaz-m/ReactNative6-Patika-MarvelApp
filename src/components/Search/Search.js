import React, {useState, useContext} from 'react';
import {TextInput, View} from 'react-native';
import styles from './Search.styles';
import {textbyLanguage} from './../../context/actions';
import {MarvelContext} from '../../context/MarvelProvider';

export default function Search({fetchHeroes}) {
  const [keyword, setKeyword] = useState('');
  const {state} = useContext(MarvelContext);

  const handleSubmit = () => {
    handleHeroSearch();
  };

  function handleHeroSearch() {
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${keyword}&orderBy=name&ts=100&apikey=19f6801ac64190c329f1fa52d50debb9&hash=10057e70e0a2ae9b702782a71cd5cf8a`;
    if (keyword === '') {
      fetchHeroes();
      return;
    }
    fetchHeroes(url);
  }

  return (
    <View style={styles[state.mode].container}>
      <TextInput
        style={styles[state.mode].textInputStyle}
        placeholder={textbyLanguage('search_placeholder', state.language)}
        placeholderTextColor={state.mode==="dark"? '#bdbdbd': '#2f2f2f'}

        value={keyword}
        onChangeText={setKeyword}
        onSubmitEditing={handleSubmit}
      />
    </View>
  );
}
