import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {getUsers} from "../api/API";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
  let [users, setUsers] = useState([]);
  async function fetchData() {
    let users = await getUsers();
    setUsers([...users]);
  }

  useEffect(() => {
    fetchData();
  }, []);
   return (
       <View>
           <FlatList data={users} renderItem={({item}) => {return <UserComponent item={item} />} }
        </View>
   );
}

export default UsersComponent;

let styles = StyleSheet.create({});