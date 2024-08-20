import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Gap, TextCustom} from '../../global';
import GymImage from '../../../assets/gym3.jpg';

const Card = ({item}) => {
  return (
    <>
      <View style={styles.card}>
        <ImageBackground
          style={styles.img}
          source={GymImage}
          imageStyle={styles.imgPhoto}>
          <View style={styles.badge}>
            <TextCustom variant="small" style={{color: 'black'}}>
              {item.level}
            </TextCustom>
          </View>
        </ImageBackground>
        <View style={styles.content}>
          <TextCustom style={{color: 'grey'}}>{item.type}</TextCustom>
          <TextCustom variant="small" style={{color: 'black'}}>
            {item.title}
          </TextCustom>
          <Gap height={12} />
          <TextCustom variant="small" style={{color: 'black'}}>
            {item.time}
          </TextCustom>
        </View>
      </View>
      <Gap height={16} />
    </>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: 20,
    left: 20,
    borderRadius: 16,
    backgroundColor: 'white',
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  imgPhoto: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  img: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
  },

  content: {
    backgroundColor: '#f1f1f1',
    padding: 12,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default Card;
