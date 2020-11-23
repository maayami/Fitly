import React from "react";
import { Image, Text } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import * as firebase from 'firebase'
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import Login from "./src/screens/Authentication/Login";
import Register from "./src/screens/Authentication/Register";


const firebaseConfig = {
  apiKey: "AIzaSyDvZAiKdg4NJOqxyMqdbyS8jWdCABEoS5o",
  authDomain: "fitly-is-awesome.firebaseapp.com",
  databaseURL: "https://fitly-is-awesome.firebaseio.com",
  projectId: "fitly-is-awesome",
  storageBucket: "fitly-is-awesome.appspot.com",
  messagingSenderId: "716509400246",
  appId: "1:716509400246:web:a5e976a2e13ce7e75eaa17",
  measurementId: "G-B35LEB5T6Y"
};

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    SignIn: Login,
    SignUp: Register,
  }),
  mainFlow: HomeScreen,
});

export default createAppContainer(switchNavigator);
