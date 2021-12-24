import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native';
import HeroStack from './HeroStack';
import Favorites from '../pages/Favorites';
import Settings from '../pages/Settings';
import routes from './routes';
import { useColorScheme } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Navigation() {

  const scheme = useColorScheme();


  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator initialRouteName={routes.HERO_STACK}>    
        <Tab.Screen name={routes.FAVORITES_PAGE} component={Favorites} />
        <Tab.Screen name={routes.HERO_STACK} component={HeroStack} />
        <Tab.Screen name={routes.SETTINGS_PAGE} component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
