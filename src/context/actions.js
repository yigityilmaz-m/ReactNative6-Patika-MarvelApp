export const setLoading = () => ({
  type: 'SET_LOADING',
});
export const setErrorData = error => ({
  type: 'SET_HEROES',
  payload: error,
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

export const getHeroesFromApi = (heroData, dispatch) => {
  const {heroes, heroError, heroLoading} = heroData;

  if (heroLoading) {
    dispatch(setLoading());
  } else {
    if (!!heroError) {
      dispatch(setErrorData(heroError));
    }
    dispatch(setHeroData(heroes));
  }
};

export const getComicsFromApi = (comicData, dispatch) => {
  const {comics, comicError, comicLoading} = comicData;

  if (comicLoading) {
    dispatch(setLoading());
  } else {
    if (!!comicError) {
      dispatch(setErrorData(comicError));
    }
    dispatch(setComicData(comics));
  }
};

export const setFavoriteHeroList = (hero, favoriteHeroList, dispatch) => {
  dispatch(setLoading());

  if (favoriteHeroList.length === 0) {
    let updatedList = [...favoriteHeroList, hero];
    dispatch(setFavoriteHeroesToState(updatedList));
    return;
  }

  const isFavorited = favoriteHeroList.includes(hero);

  if (!isFavorited) {
    let updatedList = [...favoriteHeroList, hero];
    dispatch(setFavoriteHeroesToState(updatedList));
  } else {
    let updatedFavorites = [...favoriteHeroList];
    let filtered = updatedFavorites.filter(favoritedHero => {
      return favoritedHero.id !== hero.id;
    });
    dispatch(setFavoriteHeroesToState(filtered));
  }
};


export const setFavoriteComicList = (comic, favoriteComicList, dispatch) => {
    dispatch(setLoading());
  
    if (favoriteComicList.length === 0) {
      let updatedList = [...favoriteComicList, comic];
      dispatch(setFavoriteComicsToState(updatedList));
      return;
    }
  
    const isFavorited = favoriteComicList.includes(comic);
    
    if (!isFavorited) {
      let updatedList = [...favoriteComicList, comic];
      dispatch(setFavoriteComicsToState(updatedList));
    } else {
      let updatedFavorites = [...favoriteComicList];
      let filtered = updatedFavorites.filter(favoritedComic => {
        return favoritedComic.id !== comic.id;
      });
      dispatch(setFavoriteComicsToState(filtered));
    }
  };