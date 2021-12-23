
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

export const setFavoriteHeroList = (hero, favoriteHeroList ,  dispatch) => {

    dispatch(setLoading());

    if(favoriteHeroList.length === 0) {
        dispatch(setFavoriteHeroesToState(hero))
    } else {
           const favoriteIndex = state.favoriteHeroes.findIndex(heroData => {
            heroData.id === hero.id;
              });
              if(favoriteIndex<0) {
                  let updatedList = [...favoriteHeroList , hero]
                  dispatch(setFavoriteHeroesToState(updatedList))
              } else {
                    let updatedFavorites = [...state.favoriteHeroes];
                     updatedFavorites.splice(favoriteIndex, 1);
                     dispatch(setFavoriteHeroesToState(updatedFavorites))
              }
        
    }
}

    export const setFavoriteComicList = (comic, favoriteComicList , dispatch) => {

        dispatch(setLoading());
    
        if(favoriteComicList.length === 0) {
            dispatch(setFavoriteComicsToState(comic))
        } else {
               const favoriteIndex = state.favoriteComics.findIndex(comicData => {
                comicData.id === comic.id;
                  });
                  if( favoriteIndex < 0 ) {
                      let updatedList = [...favoriteComicList , comic]
                      dispatch(setFavoriteComicsToState(updatedList))
                  } else {
                        let updatedFavorites = [...state.favoriteComics];
                         updatedFavorites.splice(favoriteIndex, 1);
                         dispatch(setFavoriteComicsToState(updatedFavorites))
                  }
            
        }



};
