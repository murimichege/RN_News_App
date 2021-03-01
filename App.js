import React from 'react';
import MainStackNavigator from './src/Navigation/MainNavigation'
import {StatusBar} from 'react-native'
export default function App() {
  StatusBar.setHidden(true, 'none');

  return (
    
    
      <MainStackNavigator/>

  );
}
