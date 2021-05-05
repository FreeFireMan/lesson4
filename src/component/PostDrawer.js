import React from 'react';
import { StatusBar } from 'react-native';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import PostsComponent from "./PostsComponent";
import TemplateComponent from "./TemplateComponent";

const Drawer = createDrawerNavigator();

const PostDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={'Posts'} options={{title: 'posts'}} component={PostsComponent}/>
      <Drawer.Screen name={'Template'} options={{title: 'template'}} component={TemplateComponent}/>
    </Drawer.Navigator>
  );
}

export default PostDrawer;

let styles = StyleSheet.create({});