import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome as Icon } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
 
  import HomeScreen from '../Navigation/Screens/HomeScreen'
  import BusinessScreen from '../Navigation/Screens/BusinessScreen'
  import FashionScreen from '../Navigation/Screens/FashionScreen'
  import HealthScreen from '../Navigation/Screens/HealthScreen'
  import PoliticsScreen from '../Navigation/Screens/PoliticsScreen'
  import SplashScreen from '../Navigation/Screens/SplashScreen'
  import TechScreen from '../Navigation/Screens/TechScreen'
  import WorldNewsScreen from '../Navigation/Screens/WorldNewsScreen'

import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";
import AddButton from '../Components/AddButton'

const Tab = createBottomTabNavigator();

 export default function MainStackNavigator(){
  const Add = () => {   return null; };

return(
    <NavigationContainer>
         <Tab.Navigator initialRouteName={HomeScreen}>
        <Tab.Screen name="Home" component={HomeScreen}
        options= {{
          tabBarIcon: () => <FontAwesome5 name="home" size={24} color="#CDCCCE" />
      }}
       />
        <Tab.Screen name="Business" component={BusinessScreen}
        options= {{
          tabBarIcon: () => <FontAwesome5 name="business-time " size={24} color="#CDCCCE" />
      }}
         />
        <Tab.Screen name="Fashion" component={FashionScreen}
        options= {{
          tabBarIcon: () => <FontAwesome5 name="tshirt" size={24} color="#CDCCCE" />
      }}
       />
        <Tab.Screen name="Health" component={HealthScreen}
        
        options= {{
          tabBarIcon: () => <FontAwesome5 name="heartbeat" size={24} color="#CDCCCE" />
      }}
      />
        <Tab.Screen name="Politics" component={PoliticsScreen}
        options= {{
          tabBarIcon: () => <FontAwesome5 name="vote-yea" size={24} color="#CDCCCE" />
      }}
       />
       
       <Tab.Screen name="addbutton" component={Add}

       options={{ tabBarIcon: () =>  <AddButton/>
       }}
        
        />
        <Tab.Screen name="World" component={WorldNewsScreen} 
        options= {{
          tabBarIcon: () => <FontAwesome5 name="globe-africa" size={24} color="#CDCCCE" />
      }}
      />
        <Tab.Screen name="Tech" component={TechScreen}
        options= {{
          tabBarIcon: () => <FontAwesome5 name="keyboard" size={24} color="#CDCCCE" />
      }}/>
      


      </Tab.Navigator>
    </NavigationContainer>
  );
}
