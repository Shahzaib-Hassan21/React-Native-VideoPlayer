/* eslint-disable prettier/prettier */
import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions, StatusBar, SafeAreaView } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from './Logo';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const toggleControls = () => {
    setShowControls(!showControls);
    setShowLogo(false);
    setIsPaused(!showControls);
  };

  const handleOrientationChange = () => {
    const isLandscape = Dimensions.get('window').width > Dimensions.get('window').height;
    StatusBar.setHidden(isLandscape);
  };

  useEffect(() => {
    Dimensions.addEventListener('change', handleOrientationChange);
    return () => {
    Dimensions.removeEventListener('change', handleOrientationChange);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowControls(false);
      setShowLogo(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [showControls]);

  const handleForward = () => {
    if (videoRef.current) {
      videoRef.current.seek(videoRef.current.getCurrentTime() + 10);
    }
  };

  const handleBackward = () => {
    if (videoRef.current) {
      videoRef.current.seek(videoRef.current.getCurrentTime() - 10);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.videoContainer} onPress={toggleControls} activeOpacity={1}>
        <Video
          ref={videoRef}
          source={require('../assets/WhatsApp.mp4')}
          style={styles.video}
          resizeMode="contain"
          paused={isPaused}
          onLoad={() => setShowLogo(false)}
          onProgress={() => setShowLogo(false)}
          onEnd={() => setShowLogo(true)}
          repeat={true}
        />
        {showLogo && (
          <View style={styles.logoContainer}>
            <Logo/>
          </View>
        )}
        {showControls && (
          <View style={styles.controlsContainer}>
            <TouchableOpacity onPress={handleBackward}>
              <Icon name="ios-rewind" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleControls}>
              <Icon name={isPaused ? 'ios-play' : 'ios-pause'} size={36} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleForward}>
              <Icon name="ios-fastforward" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
});

export default VideoPlayer;




