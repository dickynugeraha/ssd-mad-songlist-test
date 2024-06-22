import React from 'react';
import {StyleSheet, View} from 'react-native';
import Gap from '../../global/Gap';
import Skeleton from '../../global/Skeleton';

const ItemMusicSkeleton = () => {
  return (
    <>
      <View style={styles.container}>
        <Skeleton height={48} width={48} borderRadius={12} />
        <Gap width={12} />
        <View style={styles.wrapText}>
          <Skeleton height={12} borderRadius={8} />
          <Gap height={12} />
          <Skeleton height={32} borderRadius={8} />
        </View>
      </View>
      <Gap height={32} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapText: {
    width: '80%',
  },
  image: {
    height: 40,
    width: 40,
  },
  icon: {},
});

export default ItemMusicSkeleton;
