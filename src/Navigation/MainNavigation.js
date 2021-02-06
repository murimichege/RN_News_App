import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {StyleSheet,View} from 'react-native'
import { FontAwesome as Icon } from '@expo/vector-icons';

import HomeScreen from '../Navigation/Screens/HomeScreen'  
import BusinessScreen from '../Navigation/Screens/BusinessScreen'
 import FashionScreen from '../Navigation/Screens/FashionScreen'
 import HealthScreen from '../Navigation/Screens/HealthScreen'
 import PoliticsScreen from '../Navigation/Screens/PoliticsScreen'
 import SplashScreen from '../Navigation/Screens/SplashScreen'
 import TechScreen from '../Navigation/Screens/TechScreen'
 import WorldNewsScreen from '../Navigation/Screens/WorldNewsScreen'
 import { IS_IPHONE_X } from '../utils/index';

import TabBarAdvancedButton from './TabBarAdvancedButton'
 const Tab =  createBottomTabNavigator();

export default function MainStackNavigator({barColor}) {
  return (
    <NavigationContainer>
        <Tab.Navigator
      tabBar={(props) => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar
            {...props}
          />
          {IS_IPHONE_X && (
            <View style={[styles.xFillLine, {
              backgroundColor: barColor
            }]}/>
          )}
        </View>
      )}
      tabBarOptions={{
        showIcon: true,
        style: styles.navigator,
        tabStyle: {
          backgroundColor: barColor
        }
      }}
    >
     
      <Tab.Screen
name="Health"
component={HealthScreen}
options={{
  tabBarIcon: ({ color }) => (
    <Icon
      name="gear"
      size={24}
      color={color}
    />
  )
}}      
      
      
      />
        <Tab.Screen
        name="Tech"
        component={TechScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="gear"
              size={24}
              color={color}
            />
          )
        }}      />
       <Tab.Screen
        name="Featured"
        component={WorldNewsScreen}
        options={{
          tabBarButton: (props) => (
            <TabBarAdvancedButton
              bgColor={barColor}
              {...props}
            />
          )
        }}
      />
       <Tab.Screen
        name="Politics"
        component={PoliticsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="gear"
              size={24}
              color={color}
            />
          )
        }}      />
      <Tab.Screen
        name="Business"
        component={BusinessScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="gear"
              size={24}
              color={color}
            />
          )
        }}      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // SHADOW
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30
  },
  xFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 34
  }
});