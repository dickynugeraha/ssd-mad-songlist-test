import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import DarkImage from '../../assets/bg-black2.jpg';

const WrapperScreen = ({children}) => {
  return (
    <ImageBackground source={DarkImage} style={[styles.background]}>
      <View>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    padding: 18,
  },
});

export default WrapperScreen;
