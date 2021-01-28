// ./navigation/StackNavigator.js

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import BooksScreen from '../screens/BooksScreen';
import BooksDetailScreen from '../screens/BooksDetailScreen';
import FavScreen from '../screens/FavScreen';
import AllBooksScreen from '../screens/AllBooksScreen';
import DrowerLetIcon from './DrowerLetIcon';

const Stack = createStackNavigator();

const defaultOptionsForStack = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#28F1A6',
      elevation: 0,
      shadowOpacity: 0,
    },
    headerTintColor: '#333333',
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#0d0d0d',
    },
  },
};

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultOptionsForStack}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={({navigation}) => ({
          title: 'Categories',
          headerLeft: () => <DrowerLetIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Books"
        component={BooksScreen}
        options={({navigation}) => ({
          title: 'Books',
          headerLeft: () => <DrowerLetIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="BooksDetail"
        component={BooksDetailScreen}
        options={({navigation}) => ({
          title: 'BooksDetail',
          headerLeft: () => <DrowerLetIcon navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

const FavStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultOptionsForStack}>
      <Stack.Screen
        name="Favourites"
        component={FavScreen}
        options={({navigation}) => ({
          title: 'Favourites',
          headerLeft: () => <DrowerLetIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="BooksDetail"
        component={BooksDetailScreen}
        options={({navigation}) => ({
          title: 'BooksDetail',
          headerLeft: () => <DrowerLetIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={({navigation}) => ({
          title: 'Categories',
          headerLeft: () => <DrowerLetIcon navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

const AllBooksStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultOptionsForStack}>
      <Stack.Screen
        name="Favourites"
        component={AllBooksScreen}
        options={({navigation}) => ({
          title: 'Favourites',
          headerLeft: () => <DrowerLetIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="BooksDetail"
        component={BooksDetailScreen}
        options={({navigation}) => ({
          title: 'BooksDetail',
          headerLeft: () => <DrowerLetIcon navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={({navigation}) => ({
          title: 'Categories',
          headerLeft: () => <DrowerLetIcon navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
};

export {AppNavigator, FavStack, AllBooksStack};
