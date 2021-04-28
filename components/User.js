import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';

const User = ({item}) => {
   return (
     <View style={[styles.box, styles.item]}>
       <Image style={styles.tinyLogo} source={{
         uri: 'https://reactnative.dev/img/tiny_logo.png',
       }} />
       <Text>{item.name} - {item.age} - {item.status.toString()}</Text>
       <Button title={'some button'} onPress={() => console.log('press')} />
     </View>
   );
}

export default User;

let styles = StyleSheet.create({
  box: {
    height: 200,
    width: '100%',
    marginBottom: 10,
  },
  item: {
    backgroundColor: 'silver',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});