import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UsersComponent from "./src/component/UsersComponent";

export default function App() {

  return (
    <View>
      <UsersComponent />
    </View>
  );
}

const styles = StyleSheet.create({});
