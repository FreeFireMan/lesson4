import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import User from './components/User';

let users = [
    {name: 'vasya', age: 31, status: false},
	{name: 'petya', age: 30, status: true},
	{name: 'kolya', age: 29, status: true},
	{name: 'olya', age: 28, status: false},
	{name: 'max', age: 30, status: true},
	{name: 'anya', age: 31, status: false},
	{name: 'oleg', age: 28, status: false},
	{name: 'andrey', age: 29, status: true},
	{name: 'masha', age: 30, status: true},
	{name: 'olya', age: 31, status: false},
	{name: 'max', age: 31, status: true}
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList data={users} renderItem={({item}) => {
        console.log(item);
        return (
        	<User item={item} />
				)}
      } />
    </View>
  );
}

const styles = StyleSheet.create({});
