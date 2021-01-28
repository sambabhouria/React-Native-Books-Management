// ./navigation/DrawerNavigator.js

import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';
import {AllBooksStack, FavStack} from './StackNavigator';

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={TabNavigator} />
      <Drawer.Screen name="Books" component={AllBooksStack} />
      <Drawer.Screen name="Favourites" component={FavStack} />
    </Drawer.Navigator>
  );
};

export default RootNavigator;
