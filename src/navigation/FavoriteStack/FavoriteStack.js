import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from '../routes';
import { MarvelContext } from '../../context/MarvelProvider';
import { textbyLanguage } from '../../context/actions';
import Favorites from '../../pages/Favorites/Favorites';
import FavoriteComics from '../../pages/FavoriteComics/'

const Stack = createNativeStackNavigator();

export default function FavoriteStack() {
  const { state } = useContext(MarvelContext);

  return (
    <Stack.Navigator options={{ headerShown: false }} >
      <Stack.Screen
        name={routes.FAVORITES_PAGE}
        component={Favorites}
        options={{ title: textbyLanguage(routes.FAVORITES_PAGE, state.language) }}
      />
      <Stack.Screen
        name={routes.FAVORITE_COMICS_PAGE}
        component={FavoriteComics}
        options={{ headerBackVisible:false, title: textbyLanguage(routes.FAVORITE_COMICS_PAGE, state.language) }}
      />
    </Stack.Navigator>
  );
}
