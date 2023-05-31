/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Controls = ({ isPaused, togglePlayPause, handleForward, handleBackward }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackward}>
        <Icon name="ios-rewind" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={togglePlayPause}>
        <Icon name={isPaused ? 'ios-play' : 'ios-pause'} size={36} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForward}>
        <Icon name="ios-fastforward" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
});

export default Controls;



