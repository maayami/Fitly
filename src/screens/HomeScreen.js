import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConsultDoctor from './ConsultDoctor/ConsultDoctor';
import Profile from './Profile/Profile';
import FitnessTracker from './FitnessTracker/FitnessTracker';
import Explore from './Explore/Explore';
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return <NavigationContainer>
  <Tab.Navigator
     screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'LifeStyle') {
              iconName = focused ? 'md-heart' : 'md-heart';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'md-contact' : 'md-contact';
            }
               else if (route.name === 'Fitness') {
              iconName = focused ? 'md-pulse' : 'md-pulse';
            }
               else if (route.name === 'Explore') {
              iconName = focused ? 'md-compass' : 'md-compass';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
         },
       })
       }
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: '#B8B8B8',
          activeBackgroundColor:'#1e90ff',
          inactiveBackgroundColor:'white',
          tabStyle:{alignItems:'center',
          justifyContent:'center',
          fontWeight:1000,
          }
        }}>
          <Tab.Screen name="Explore" component={Explore} />
          <Tab.Screen name="LifeStyle" component={ConsultDoctor} />
          <Tab.Screen name="Fitness" component={FitnessTracker} />
          <Tab.Screen name="Profile" component={Profile} />
         </Tab.Navigator>
  </NavigationContainer>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
