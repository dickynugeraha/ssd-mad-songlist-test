import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import useRegister from '../../../hooks/Register';
import {Gap, TextCustom} from '../../global';
import ProfileImage from '../../../assets/profile.jpg';
import {useSelector} from 'react-redux';

const Profile = () => {
  const profile = useSelector(state => state.register);
  console.log('profile', profile);

  return (
    <View style={styles.card}>
      <View style={styles.wrapper}>
        <TextCustom style={{color: '#333'}}>Dialy Activity</TextCustom>
        <Gap height={16} />
        <View style={styles.container}>
          <Image style={styles.img} source={ProfileImage} />
          <Gap width={12} />
          <View>
            <ProfileItem title={'Name'} value={profile.name} />
            <ProfileItem title={'Birthday'} value={profile.dob} />
            <ProfileItem title={'Height'} value={profile.height} />
            <ProfileItem title={'Weight'} value={profile.weight} />
            <ProfileItem title={'Blood Type'} value={profile.bloodType} />
          </View>
        </View>
      </View>
    </View>
  );

  function ProfileItem({title, value}) {
    return (
      <>
        <View style={[styles.container, {alignItems: 'center'}]}>
          <TextCustom style={styles.textItem} variant="small">
            {title}
          </TextCustom>
          <TextCustom style={styles.textItem} variant="small">
            : {value}
          </TextCustom>
        </View>
        <Gap height={4} />
      </>
    );
  }
};

const styles = StyleSheet.create({
  card: {
    height: Dimensions.get('window').height * 0.22,
    padding: 14,
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
  },
  wrapper: {
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  textItem: {
    flexBasis: Dimensions.get('window').width / 4,
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});

export default Profile;
