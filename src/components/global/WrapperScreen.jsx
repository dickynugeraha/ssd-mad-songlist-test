import React from 'react';
import {ImageBackground, StyleSheet, View, useColorScheme} from 'react-native';
import DarkImage from '../../assets/bg-black2.jpg';
import LightImage from '../../assets/bg-white.jpg';

const WrapperScreen = ({children}) => {
  const colorScheme = useColorScheme();
  const image = colorScheme === 'dark' ? DarkImage : LightImage;

  return (
    <ImageBackground source={image} style={styles.background}>
      {/* {children} */}
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
  },
});

export default WrapperScreen;
