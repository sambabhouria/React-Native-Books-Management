import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import RootNavigator from './navigation-configration/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};
export default App;
