import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import List from '../../pages/List';
import Detail from '../../pages/Detail';
import routes from '../routes';

const Stack = createNativeStackNavigator();

export default function HeroStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.LIST_PAGE}
        component={List}
      />
       <Stack.Screen
        name={routes.DETAIL_PAGE}
        component={Detail}
      />
    </Stack.Navigator>
  );
}
