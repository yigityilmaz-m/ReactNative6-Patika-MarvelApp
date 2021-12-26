import React, {useState , useContext} from 'react';
import {View, FlatList, TouchableOpacity, TextInput} from 'react-native';
import CharacterListCard from '../../components/CharacterCards/CharacterListCard';
import routes from '../../Navigation/routes';
import {useNavigation} from '@react-navigation/core';
import useHeroData from '../../context/data/useHeroData';
import I18n from '../../lang/_i18n';
import Search from './../../components/Search/Search';
import LottieView from 'lottie-react-native';
import styles from './List.styles'
import { MarvelContext } from './../../context/MarvelProvider';
import {textbyLanguage} from '../../context/actions';

export default function List() {
  const navigation = useNavigation();

  const {state} = useContext(MarvelContext)

  const [searchValue, setSearchValue] = useState('');

  const {fetchHeroes, heroLoading, heroes} = useHeroData();

  function handleHeroSearch() {
    const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchValue}&orderBy=name&ts=100&apikey=19f6801ac64190c329f1fa52d50debb9&hash=10057e70e0a2ae9b702782a71cd5cf8a`;
    if (searchValue === '') {
      fetchHeroes();
      return;
    }
    fetchHeroes(url);
  }

  const renderItem = ({item}) => (
      <TouchableOpacity style={styles.cardContainerStyles}
        onPress={() => navigation.navigate(routes.DETAIL_PAGE, {hero: item})}>
        <CharacterListCard hero={item} mode={state.mode}/>
      </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {!heroLoading ? (
        <View style={styles.container}>
          <TextInput
          style={styles[state.mode].searchStyles}
            placeholder={textbyLanguage('search_placeholder', state.language)}
            placeholderTextColor={state.mode==="dark"? '#EEEEEE' : '#2F2F2F'}
            onChangeText={setSearchValue}
            onSubmitEditing={handleHeroSearch}
            value={searchValue}
          />
          <FlatList
            style={styles.flatListStyles}
            data={heroes}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      ) : (
        <LottieView
          source={require('../../assets/iron-man.json')}
          autoPlay
          loop
        
        />
      )}
    </View>
  );
}
