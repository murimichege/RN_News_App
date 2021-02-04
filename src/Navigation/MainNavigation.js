import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from '../Navigation/Screens/HomeScreen'  
import BusinessScreen from '../Navigation/Screens/BusinessScreen'
 import FashionScreen from '../Navigation/Screens/FashionScreen'
 import HealthScreen from '../Navigation/Screens/HealthScreen'
 import PoliticsScreen from '../Navigation/Screens/PoliticsScreen'
 import SplashScreen from '../Navigation/Screens/SplashScreen'
 import TechScreen from '../Navigation/Screens/TechScreen'
 import WorldNewsScreen from '../Navigation/Screens/WorldNewsScreen'


 const Tab = createMaterialTopTabNavigator();

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
       <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="Featured"
        component={WorldNewsScreen}
        options={{ tabBarLabel: 'Featured' }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'Home' }}
      />
        <Tab.Screen
        name="Tech"
        component={TechScreen}
        options={{ tabBarLabel: 'Tech' }}
      />
       <Tab.Screen
        name="Politics"
        component={PoliticsScreen}
        options={{ tabBarLabel: 'Politics' }}
      />
      <Tab.Screen
        name="Business"
        component={BusinessScreen}
        options={{ tabBarLabel: 'Business' }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
/* 
        <Stack.Screen name="Business" component={BusinessScreen} />
  <Stack.Screen name="Fashion" component={FashionScreen} />
        <Stack.Screen name="Health" component={HealthScreen} />
        <Stack.Screen name="Politics" component={PoliticsScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Tech" component={TechScreen} />
        <Stack.Screen name="World" component={WorldNewsScreen} />*/