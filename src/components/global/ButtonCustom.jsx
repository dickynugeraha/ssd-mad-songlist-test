// Button.js
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const ButtonCustom = ({
  title,
  onPress,
  style,
  textStyle,
  loading,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style, disabled && styles.disabledButton]}
      activeOpacity={0.7}
      disabled={disabled || loading}>
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: '#A9A9A9',
  },
});

export default ButtonCustom;
