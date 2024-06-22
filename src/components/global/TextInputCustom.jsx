import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TextInputCustom = ({
  leftIcon,
  rightIcon,
  onLeftIconPress,
  onRightIconPress,
  style,
  inputStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      {leftIcon && (
        <TouchableOpacity onPress={onLeftIconPress}>
          <Icon name={leftIcon} size={24} style={styles.icon} />
        </TouchableOpacity>
      )}
      <TextInput
        style={[styles.input, inputStyle]}
        {...props}
        placeholderTextColor={'grey'}
      />
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          <Icon name={rightIcon} size={24} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width: '100%',
    padding: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    color: '#333',
  },
  icon: {
    marginHorizontal: 5,
    color: 'grey',
  },
});

export default TextInputCustom;
