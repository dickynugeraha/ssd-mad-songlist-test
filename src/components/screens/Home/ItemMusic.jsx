import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import TextCustom from '../../global/TextCustom';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Gap from '../../global/Gap';

const ItemMusic = ({onPress, data}) => {
  const colorScheme = useColorScheme();
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={styles.container}
        activeOpacity={0.8}>
        <View style={styles.wrapImage}>
          {data.artworkUrl100 && (
            <Image source={{uri: data.artworkUrl100}} style={styles.image} />
          )}
          <Gap width={12} />
          <View style={styles.wrapText}>
            <TextCustom variant="bold">{data.trackName}</TextCustom>
            <TextCustom variant="small">{data.artistName}</TextCustom>
          </View>
        </View>
        <View>
          <Icon
            name="arrow-right"
            size={32}
            style={{color: colorScheme === 'dark' ? 'white' : '#333'}}
          />
        </View>
      </TouchableOpacity>
      <Gap height={16} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapImage: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapText: {
    width: '75%',
  },
  image: {
    resizeMode: 'cover',
    height: 40,
    width: 40,
  },
  icon: {},
});

export default ItemMusic;
