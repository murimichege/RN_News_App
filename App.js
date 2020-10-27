import React from 'react';
import MainStackNavigator from '../../REACT NATIVE/RN_News_App/src/Navigation/MainNavigation'
import {NewsProvider} from './src/Context/Context'

export default function App() {
  return (
    
      <NewsProvider>
      <MainStackNavigator/>
      </NewsProvider>
  );
}
