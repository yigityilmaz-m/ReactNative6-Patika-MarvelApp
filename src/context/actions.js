import AsyncStorage from '@react-native-async-storage/async-storage';
import I18n from '../lang/_i18n';

export const setErrorData = error => ({
  type: 'SET_HEROES',
  payload: error,
});


// ---------------------Async Storage Get Set methods---------------------------
const storeHeroData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@FavoritedHeroes', jsonValue);
  } catch (error) {
    setErrorData(error);
  }
};
export async function getHeroData() {
  const newArr=[]
  try {
    let jsonValue = await AsyncStorage.getItem('@FavoritedHeroes');
    return jsonValue === null ? newArr : JSON.parse(jsonValue);
  } catch (error) {
    setErrorData(error);
  }
}

const storeComicData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@FavoritedComics', jsonValue);
  } catch (error) {
    setErrorData(error);
  }
};
export async function getComicData() {
  const newArr=[]
  try {
    let jsonValue = await AsyncStorage.getItem('@FavoritedComics');
    return jsonValue === null ? newArr : JSON.parse(jsonValue);
  } catch (error) {
    setErrorData(error);
  }
}

export async function getLanguageFromLocalStorage() {
  try {
    let languageData = await AsyncStorage.getItem('@Language');
    return languageData;
  } catch (error) {
    setErrorData(error);
  }
}

export async function setLanguageToLocalStorage(value) {
  try {
    await AsyncStorage.setItem('@Language', value);
  } catch (error) {
    setErrorData(error);
  }
}

export async function getModeFromLocalStorage() {
  try {
    let modeData = await AsyncStorage.getItem('@Mode');
    return modeData;
  } catch (error) {
    setErrorData(error);
  }
}

export async function setModeToLocalStorage(value) {
  try {
    await AsyncStorage.setItem('@Mode', value);
  } catch (error) {
    setErrorData(error);
  }
}

// ----------------------------------------------------------------------------

export const setLoading = () => ({
  type: 'SET_LOADING',
});

export const setHeroData = heroList => ({
  type: 'SET_HEROES',
  payload: heroList,
});
export const setComicData = comicList => ({
  type: 'SET_COMICS',
  payload: comicList,
});

export const setFavoriteHeroesToState = favoriteHeroesList => ({
  type: 'SET_FAVORITE_HEROES',
  payload: favoriteHeroesList,
});

export const setFavoriteComicsToState = favoriteComicsList => ({
  type: 'SET_FAVORITE_COMICS',
  payload: favoriteComicsList,
});
export const setLanguageToState = languageData => ({
  type: 'SET_LANGUAGE',
  payload: languageData,
});
export const setModeToState = modeData => ({
  type: 'SET_MODE',
  payload: modeData,
});

// export const getHeroesFromApi = (heroData, dispatch) => {
//   const {heroes, heroError, heroLoading} = heroData;

//   if (heroLoading) {
//     dispatch(setLoading());
//   } else {
//     if (!!heroError) {
//       dispatch(setErrorData(heroError));
//     }
//     dispatch(setHeroData(heroes));
//   }
// };

// export const getComicsFromApi = (comicData, dispatch) => {
//   const {comics, comicError, comicLoading} = comicData;

//   if (comicLoading) {
//     dispatch(setLoading());
//   } else {
//     if (!!comicError) {
//       dispatch(setErrorData(comicError));
//     }
//     dispatch(setComicData(comics));
//   }
// };

export const setFavoriteHeroList = (hero, dispatch) => {
  dispatch(setLoading());
  let favoriteHeroList = [];
  getHeroData().then(data => {
    favoriteHeroList = data;

    if (favoriteHeroList.length === 0) {
      let updatedList = [hero];
      dispatch(setFavoriteHeroesToState(updatedList));
      storeHeroData(updatedList);
      return;
    }

    if (favoriteHeroList.length > 0) {
      const isFavorited = favoriteHeroList.findIndex(
        favoriteHero => favoriteHero.id === hero.id,
      );

      if (isFavorited < 0) {
        let updatedList = [...favoriteHeroList, hero];
        dispatch(setFavoriteHeroesToState(updatedList));
        storeHeroData(updatedList);
      } else {
        let updatedFavorites = [...favoriteHeroList];
        let filtered = updatedFavorites.filter(favoritedHero => {
          return favoritedHero.id !== hero.id;
        });
        dispatch(setFavoriteHeroesToState(filtered));
        storeHeroData(filtered);
      }
    }
  });
};

export const setFavoriteComicList = (comic, dispatch) => {
  dispatch(setLoading());
  let favoriteComicList = [];
  getComicData().then(data => {
    favoriteComicList = data;

    if (favoriteComicList.length === 0) {
      let updatedList = [comic];
      dispatch(setFavoriteComicsToState(updatedList));
      storeComicData(updatedList);
      return;
    }

    if (favoriteComicList.length > 0) {
      const isFavorited = favoriteComicList.findIndex(
        favoriteComic => favoriteComic.id === comic.id,
      );

      if (isFavorited < 0) {
        let updatedList = [...favoriteComicList, comic];
        dispatch(setFavoriteComicsToState(updatedList));
        storeComicData(updatedList);
      } else {
        let updatedFavorites = [...favoriteComicList];
        let filtered = updatedFavorites.filter(favoritedComic => {
          return favoritedComic.id !== comic.id;
        });
        dispatch(setFavoriteComicsToState(filtered));
        storeComicData(filtered);
      }
    }
  });
};

export const getFavoritedHeroesList = async dispatch => {
  let favoriteHeroes = [];

  let localStorageData = await getHeroData();
  localStorageData === null
    ? (favoriteHeroes = [])
    : (favoriteHeroes = localStorageData);
  dispatch(setFavoriteHeroesToState(favoriteHeroes));
};

export const getFavoritedComicsList = async dispatch => {
  let favoriteComics = [];

  let localStorageData = await getComicData();
  localStorageData === null
    ? (favoriteComics = [])
    : (favoriteComics = localStorageData);
  dispatch(setFavoriteComicsToState(favoriteComics));
};

export const setLanguage = (language, dispatch) => {
  dispatch(setLanguageToState(language));
  setLanguageToLocalStorage(language);
};

export const getLanguage = async dispatch => {
  let language = await getLanguageFromLocalStorage();
  if (language === null) {
    language = 'system';
  }
  dispatch(setLanguageToState(language));
};

export const textbyLanguage = (title, language) => {
  return I18n.t(`${title}`, language === 'system' ? {} : {locale: language});
};

export const isFavorited = (item , itemArray) => {
  return itemArray.length > 0  ? (itemArray.findIndex((favItem)=> (favItem.id === item.id))>=0?true:false):false
};

export const setMode = (mode, dispatch) => {
  dispatch(setModeToState(mode));
  setModeToLocalStorage(mode);
};

export const getMode = async (systemMode, dispatch) => {
  let mode = await getModeFromLocalStorage();
  if (mode === null) {
    mode = systemMode;
  }
  dispatch(setModeToState(mode));
};
