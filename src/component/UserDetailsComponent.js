import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const UserDetailsComponent = ({route, navigation}) => {
  const {params: {data}} = route;
  useEffect(() => {
    navigation.setOptions({
      title: data.name,
    })
  }, []);

   return (
       <View>
           <Text>{data.username} {data.email}</Text>
        </View>
   );
}

export default UserDetailsComponent;

let styles = StyleSheet.create({});