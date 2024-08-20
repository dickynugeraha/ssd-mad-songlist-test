import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextCustom from './TextCustom';
import Gap from './Gap';

const TextInputCustom = ({
  text,
  leftIcon,
  rightIcon,
  onLeftIconPress,
  onRightIconPress,
  style,
  inputStyle,
  value,
  handleChange,
  ...props
}) => {
  return (
    <>
      <TextCustom variant="small">{text}</TextCustom>
      <Gap height={6} />
      <View style={[styles.container, style]}>
        {leftIcon && (
          <TouchableOpacity onPress={onLeftIconPress}>
            <Icon name={leftIcon} size={24} style={styles.icon} />
          </TouchableOpacity>
        )}
        <TextInput
          style={[styles.input, inputStyle]}
          value={value}
          onChangeText={val => handleChange(val)}
          {...props}
          placeholderTextColor={'grey'}
        />
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress}>
            <Icon name={rightIcon} size={24} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width: '100%',
    padding: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 6,
    color: '#333',
  },
  icon: {
    marginHorizontal: 5,
    color: 'grey',
  },
});

export default TextInputCustom;
