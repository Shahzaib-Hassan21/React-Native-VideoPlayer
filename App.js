/* eslint-disable prettier/prettier */
import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import { View, StyleSheet } from 'react-native';

const App = () => {
  return (
  <View style={styles.container}>
    <VideoPlayer/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
