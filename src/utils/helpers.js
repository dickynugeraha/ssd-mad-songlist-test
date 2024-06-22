import {ToastAndroid, Platform} from 'react-native';

export const queryParams = obj => {
  const str = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
    }
  }
  return str.join('&');
};

export const replaceSpaceWithPlus = inputString => {
  return inputString.replace(/ /g, '+');
};

export const showToastMessage = msg => {
  if (Platform.OS === 'android') {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  }
};
