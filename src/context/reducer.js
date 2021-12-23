export default (state, action) => {
  switch (action.type) {
    case 'SET_LOADING': {
      return {...state, loading: true};
    }
    case 'SET_ERROR': {
        const updatedErrorLog = [...state.errorLog , action.payload]
      return {...state, errorLog: updatedErrorLog};
    }

    case 'SET_HEROES': {
      return {...state, loading: false, heroList: action.payload};
    }
    case 'SET_COMICS': {
      return {...state, loading: false, comicList: action.payload};
    }
    case 'SET_FAVORITE_HEROES' : {
        return { ...state , loading:false , favoriteHeroes: action.payload}
    }
    case 'SET_FAVORITE_COMICS' : {
        return { ...state , loading:false , favoriteComics: action.payload}
    }

    default:
      return state;
  }
};
