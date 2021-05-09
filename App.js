import React from 'react';
import { StatusBar } from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import UsersComponent from "./src/component/UsersComponent";
import PostDrawer from "./src/component/PostDrawer";
import CameraComponent from "./src/component/CameraComponent";

let BottomTabNavigator = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <BottomTabNavigator.Navigator tabBarOptions={{tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
      },
      labelStyle: {
        fontSize: 20
      }}}>
          <BottomTabNavigator.Screen name={'users'} component={UsersComponent} />
          <BottomTabNavigator.Screen name={'postDrawer'} component={PostDrawer} />
          <BottomTabNavigator.Screen name={'camera'} component={CameraComponent}options={{unmountOnBlur: true}} />
      </BottomTabNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
