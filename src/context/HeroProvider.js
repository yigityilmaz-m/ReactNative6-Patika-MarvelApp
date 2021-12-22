import React, {createContext, useReducer} from 'react';
import reducer from './reducer';
import store from './store';

export const HeroContext = createContext();


export default function HeroProvider({children}) {
    const [state, dispatch] = useReducer(reducer, store);
  
    return (
      <HeroContext.Provider value={{state, dispatch}}>
        {children}
      </HeroContext.Provider>
    );
  }