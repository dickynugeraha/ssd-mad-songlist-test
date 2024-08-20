import React from 'react';
import {Text, StyleSheet, useColorScheme} from 'react-native';

const TextCustom = ({children, style, variant = 'regular', ...props}) => {
  // const colorScheme = useColorScheme();
  // const fontColor = colorScheme === 'dark' ? '#f1f1f1' : '#333';
  const fontColor = 'dark';

  return (
    <Text style={[styles[variant], style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  large: {
    fontSize: 32,
  },
  regular: {
    fontSize: 18,
  },
  bold: {
    fontSize: 18,

    fontWeight: 'bold',
  },
  small: {
    fontSize: 15,
  },
});

export default TextCustom;
