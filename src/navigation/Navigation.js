import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HeroStack from './HeroStack';
import Favorites from '../pages/Favorites';
import Settings from '../pages/Settings';
import routes from './routes';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={routes.FAVORITES_PAGE} component={Favorites} />
        <Tab.Screen name={routes.HERO_STACK} component={HeroStack} />
        <Tab.Screen name={routes.SETTINGS_PAGE} component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
