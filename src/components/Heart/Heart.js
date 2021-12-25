import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { setFavoriteHeroList } from './../../../context/actions';


export default function Heart(hero , favoriteHeroes) {


    const favoritedHero =
    favoriteHeroes.length > 0 ? favoriteHeroes.includes(hero) : false;

    const [isFavorited , setIsFavorited] = useState(favoritedHero);

    const handleFavorite = () => {
      setFavoriteHeroList(hero,dispatch)
      setIsFavorited(true)
  
    }


    return (
        <Icon name={isFavorited?"heart":"hearto"} size={30} style={styles[mode].heartStyle} onClick={handleFavorite} />

    )
}
