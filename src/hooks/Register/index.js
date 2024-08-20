import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
import {useDispatch} from 'react-redux';

export default function useRegister() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [register, setRegister] = useState({
    name: '',
    dob: '',
    height: '',
    weight: '',
    bloodType: '',
  });
  const [loading, setLoading] = useState(false);

  const postRegister = data => {
    setLoading(true);

    if (!data.bloodType || !data.height || !data.weight || !data.name) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Failed',
        textBody: 'All field must be entered!',
      });
      setLoading(false);

      return;
    }

    setRegister(data);
    dispatch({type: 'SET_REGISTER', data});

    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Training');
    }, 1000);
  };

  return {
    register,
    postRegister,
    loading,
  };
}
