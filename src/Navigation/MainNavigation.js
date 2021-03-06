import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
 
  import HomeScreen from '../Navigation/Screens/HomeScreen'
  import BusinessScreen from '../Navigation/Screens/BusinessScreen'
  import FashionScreen from '../Navigation/Screens/FashionScreen'
  import HealthScreen from '../Navigation/Screens/HealthScreen'
  import PoliticsScreen from '../Navigation/Screens/PoliticsScreen'
  import SplashScreen from '../Navigation/Screens/SplashScreen'
  import TechScreen from '../Navigation/Screens/TechScreen'
  import WorldNewsScreen from '../Navigation/Screens/WorldNewsScreen'


const Stack = createStackNavigator()
 export default function MainStackNavigator(){
  

return(
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Health" component={HealthScreen}/>
        <Stack.Screen name="Politics" component={PoliticsScreen}/>
        <Stack.Screen name="Business" component={BusinessScreen}/>
        <Stack.Screen name="Fashion" component={FashionScreen}/>
        <Stack.Screen name="World" component={WorldNewsScreen}/>
        <Stack.Screen name="Tech" component={TechScreen}/>
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
