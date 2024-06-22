import React from 'react';
import {StyleSheet, TouchableOpacity, View, useColorScheme} from 'react-native';
import TextCustom from '../../global/TextCustom';
import Gap from '../../global/Gap';

const FilteredBy = ({onChangeFilter, filter}) => {
  const colorScheme = useColorScheme();

  borderColor = colorScheme === 'dark' ? 'white' : '#333';

  return (
    <View style={styles.container}>
      <View>
        <TextCustom variant="small">Search by</TextCustom>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.outlinedButton,
            filter === 'song'
              ? {borderWidth: 1, borderColor: borderColor}
              : null,
          ]}
          onPress={() => onChangeFilter('song')}>
          <TextCustom variant="small">Song</TextCustom>
        </TouchableOpacity>
        <Gap width={8} />
        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.outlinedButton,
            filter === 'artist'
              ? {borderWidth: 1, borderColor: borderColor}
              : null,
          ]}
          onPress={() => onChangeFilter('artist')}>
          <TextCustom variant="small">Artist</TextCustom>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  outlinedButton: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default FilteredBy;
