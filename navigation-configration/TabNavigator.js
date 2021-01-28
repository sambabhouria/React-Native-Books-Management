// ./navigation/TabNavigator.js

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {AppNavigator, FavStack, AllBooksStack} from './StackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'black',
        tabStyle: {
          height: 50,
          zIndex: 99,
          borderColor: 'white',
          borderTopWidth: 0,
        },
        labelStyle: {fontSize: 12, paddingTop: 2, paddingBottom: 3},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = '';
          if (route.name === 'BooksDetail') {
            iconName = 'book-open';
          }
          if (route.name === 'Favourites') {
            iconName = 'star';
          }
          if (route.name === 'Categories') {
            iconName = 'book';
          }
          if (route.name === 'Books') {
            iconName = 'book-open';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Categories" component={AppNavigator} />
      <Tab.Screen name="Books" component={AllBooksStack} />
      <Tab.Screen name="Favourites" component={FavStack} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
