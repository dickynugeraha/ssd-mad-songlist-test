import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import TextCustom from '../../global/TextCustom';
import Gap from '../../global/Gap';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Card = ({data}) => {
  const goToLink = async url => {
    Linking.openURL(url).catch(err =>
      ToastAndroid.show('Cannot open link', ToastAndroid.SHORT),
    );
  };

  return (
    <View style={[styles.card]}>
      <TextCustom
        style={[styles.textWhite, {textAlign: 'center'}]}
        variant="large">
        {data.artistName}
      </TextCustom>
      <Gap height={24} />
      {data.artworkUrl100 && (
        <View style={styles.wrapImage}>
          <Image source={{uri: data.artworkUrl100}} style={styles.image} />
        </View>
      )}
      <Gap height={28} />
      {data.trackName && (
        <>
          <TextTitle text={'Song name'} />
          <TextDesc text={data.trackName} />
          <Gap height={12} />
        </>
      )}

      <TextTitle text={'Genre'} />
      <TextDesc text={data.primaryGenreName} />
      <Gap height={12} />
      {data.artistLinkUrl && (
        <>
          <TextTitle text={'Go to artist profile'} />
          <TextLink url={data.artistLinkUrl} />
          <Gap height={12} />
        </>
      )}
      {data.kind && (
        <>
          <TextTitle text={'Type'} />
          <TextDesc text={data.kind} />
          <Gap height={12} />
        </>
      )}

      {data.collectionName && (
        <>
          <TextTitle text={'Collection name'} />
          <TextDesc text={data.collectionName} />
          <Gap height={12} />
        </>
      )}
      {data.country && (
        <>
          <TextTitle text={'Country'} />
          <TextDesc text={data.country} />
          <Gap height={12} />
        </>
      )}
      {data.artistViewUrl && (
        <>
          <TextTitle text={'Go to artist profile'} />
          <TextLink url={data.artistViewUrl} />
          <Gap height={12} />
        </>
      )}
      {data.collectionViewUrl && (
        <>
          <TextTitle text={'Go to collection'} />
          <TextLink url={data.collectionViewUrl} />
        </>
      )}
    </View>
  );

  function TextTitle({text}) {
    return (
      <TextCustom style={[styles.title, styles.textWhite]} variant="regular">
        {text}
      </TextCustom>
    );
  }
  function TextDesc({text}) {
    return (
      <TextCustom variant="small" style={styles.textWhite}>
        {text}
      </TextCustom>
    );
  }
  function TextLink({url}) {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => goToLink(url)}>
        <TextCustom style={styles.textLink} variant="regular">
          Click here
        </TextCustom>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    padding: 24,
    width: '100%',
    minHeight: 300,
    backgroundColor: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  textWhite: {color: 'white'},
  textLink: {color: '#3366CC'},
  title: {
    fontWeight: 'bold',
  },
  wrapImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
});

export default Card;
