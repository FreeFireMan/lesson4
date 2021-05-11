import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Camera} from "expo-camera";
import * as MediaLibrary from 'expo-media-library';

const CameraComponent = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    (async () => {
      let {status} = await Camera.requestPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  async function takePicture() {
    if (hasPermission) {
      let data = await camera.takePictureAsync(null);
      await MediaLibrary.saveToLibraryAsync(data.uri);
      // send to server
      console.log(data)
    }
  }

  const flipBack = () => {
    setType(Camera.Constants.Type.back);
  }
  const flipFront = () => {
    setType(Camera.Constants.Type.front);
  }

  return (
    <View style={styles.container}>
      <Text>CameraComponent page</Text>
      <View style={styles.cameraContainer}>
        <Camera style={styles.fixedRatio} type={type} ref={(r) => setCamera(r)} />
        <Button title={'take picture'} onPress={takePicture} />
        <Button title={'back'} onPress={flipBack} />
        <Button title={'front'} onPress={flipFront} />
      </View>
    </View>
  );
}

export default CameraComponent;

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
  },
  cameraContainer: {
    flex: 1,
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  }
});
