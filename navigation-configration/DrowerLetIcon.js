// ./navigation/DrawerNavigator.js

import React from 'react';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import MyHeaderButton from '../screens/MyHeaderButton';

const DrowerLetIcon = ({navigation}) => (
  <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
    <Item
      title="Menu"
      iconName="bars"
      onPress={() => {
        navigation.openDrawer();
      }}
      style={{color: 'black'}}
    />
  </HeaderButtons>
);

export default DrowerLetIcon;
