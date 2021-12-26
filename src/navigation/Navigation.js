import React, {useContext, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import HeroStack from './HeroStack';
import Favorites from '../pages/Favorites';
import Settings from '../pages/Settings';
import routes from './routes';
import I18n from '../lang/_i18n';
import {useColorScheme} from 'react-native';
import {MarvelContext} from '../context/MarvelProvider';
import {
  getLanguage,
  textbyLanguage,
  setMode,
  getFavoritedHeroesList,
} from '../context/actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

export default function Navigation() {
  const {state, dispatch} = useContext(MarvelContext);

  const scheme = useColorScheme();

  useEffect(() => {
    getLanguage(dispatch);
    setMode(scheme, dispatch);
    getFavoritedHeroesList(dispatch);
  }, []);

  return (
    <NavigationContainer
      theme={state.mode === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator initialRouteName={routes.HERO_STACK}>
        <Tab.Screen
          name={routes.FAVORITES_PAGE}
          component={Favorites}
          options={{
            title: textbyLanguage(routes.FAVORITES_PAGE, state.language),
            tabBarIcon: ({size, color}) => (
              <Icon name="star" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={routes.HERO_STACK}
          component={HeroStack}
          options={{
            headerShown: false,
            title: textbyLanguage(routes.HERO_STACK, state.language),
            tabBarIcon: ({size, color}) => (
              <Icon name="domino-mask" color={color} size={size+25} style={{marginTop: -5}} />
            ),
          }}
        />
        <Tab.Screen
          name={routes.SETTINGS_PAGE}
          component={Settings}
          options={{
            title: textbyLanguage(routes.SETTINGS_PAGE, state.language),
            tabBarIcon: ({size, color}) => (
              <Icon name="cog" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
