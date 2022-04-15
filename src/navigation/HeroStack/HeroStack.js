import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import List from '../../pages/List';
import Detail from '../../pages/Detail';
import routes from '../routes';
import {MarvelContext} from '../../context/MarvelProvider';
import {textbyLanguage} from '../../context/actions';
import ComicDetail from '../../pages/ComicDetail';

const Stack = createNativeStackNavigator();

export default function HeroStack() {
  const {state} = useContext(MarvelContext);

  return (
    <Stack.Navigator options={{headerShown: false}} >
      <Stack.Screen
        name={routes.LIST_PAGE}
        component={List}
        options={{title: textbyLanguage(routes.LIST_PAGE, state.language)}}
      />
      <Stack.Screen
        name={routes.DETAIL_PAGE}
        component={Detail}
        options={{title: textbyLanguage(routes.DETAIL_PAGE, state.language)}}
      />
      <Stack.Screen
        name={routes.COMIC_DETAIL}
        component={ComicDetail}
        options={{title: textbyLanguage(routes.COMIC_DETAIL, state.language)}}
      />
    </Stack.Navigator>
  );
}
