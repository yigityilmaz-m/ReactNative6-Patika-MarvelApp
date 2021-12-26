import React, {useState , useContext} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { setFavoriteHeroList } from '../../context/actions';
import styles from './Heart.styles'
import { MarvelContext } from '../../context/MarvelProvider';


export default function Heart({hero} ) {

  const {state , dispatch} = useContext(MarvelContext)

    const favoritedHero =
    state.favoriteHeroes.length > 0 ? state.favoriteHeroes.includes(hero) : false;

    const [isFavorited , setIsFavorited] = useState(favoritedHero);

    const handleFavorite = () => {
        setFavoriteHeroList(hero,dispatch)
        setIsFavorited(prevState => !prevState)
     
    }


    return (
        <Icon name={isFavorited?"heart":"hearto"} size={30} style={styles.heartStyle} onPress={handleFavorite} />

    )
}
