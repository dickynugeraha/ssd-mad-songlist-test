import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import WrapperScreen from '../../components/global/WrapperScreen';
import TextCustom from '../../components/global/TextCustom';
import Gap from '../../components/global/Gap';
import TextInputCustom from '../../components/global/TextInputCustom';
import DatePicker from 'react-native-date-picker';
import ButtonCustom from '../../components/global/ButtonCustom';
import {TouchableOpacity} from 'react-native-gesture-handler';
import useRegister from '../../hooks/Register';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Register = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [formRegister, setFormRegister] = useState({
    name: '',
    dob: '',
    height: '',
    weight: '',
    bloodType: '',
  });
  const bmi = formRegister.weight / (formRegister.height / 100) ** 2;
  const now = new Date().toLocaleDateString();
  const dateOfBirthday = date.toLocaleDateString();

  const {loading, postRegister} = useRegister();

  return (
    <WrapperScreen>
      <KeyboardAwareScrollView>
        <View style={styles.content}>
          <Gap height={50} />
          <TextCustom variant="large" style={styles.titleText}>
            Join With Us
          </TextCustom>
          <Gap height={12} />
          <View style={styles.cardProfile}>
            <View>
              <TextCustom variant="small">
                Date of birthday :{' '}
                {dateOfBirthday === now ? '' : dateOfBirthday}
              </TextCustom>
              <Gap height={6} />
              <TouchableOpacity activeOpacity={0.7}>
                <TextCustom
                  variant="small"
                  onPress={() => setOpen(true)}
                  style={styles.buttonDate}>
                  Choosen date
                </TextCustom>
              </TouchableOpacity>
              <DatePicker
                modal
                mode="date"
                open={open}
                date={date}
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                  setFormRegister({
                    ...formRegister,
                    dob: date.toLocaleDateString(),
                  });
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </View>
            <Gap height={12} />
            <TextInputCustom
              text="Name"
              style={styles.inputForm}
              value={formRegister.name}
              handleChange={val =>
                setFormRegister({...formRegister, name: val})
              }
            />
            <Gap height={12} />
            <TextInputCustom
              text="Weight (kg)"
              style={styles.inputForm}
              keyboardType="numeric"
              value={formRegister.weight}
              handleChange={val =>
                setFormRegister({...formRegister, weight: val})
              }
            />
            <Gap height={12} />
            <TextInputCustom
              text="Height (cm)"
              style={styles.inputForm}
              keyboardType="numeric"
              value={formRegister.height}
              handleChange={val =>
                setFormRegister({...formRegister, height: val})
              }
            />
            <Gap height={12} />
            <TextInputCustom
              text="Blood type"
              style={styles.inputForm}
              value={formRegister.bloodType}
              handleChange={val =>
                setFormRegister({...formRegister, bloodType: val})
              }
            />
            <Gap height={12} />
            <TextCustom variant="small">Body mass index (auto)"</TextCustom>
            <Gap height={8} />
            <TextCustom variant="small">{bmi ? bmi : ''}</TextCustom>
            <Gap height={24} />
            <ButtonCustom
              title={'Submit'}
              onPress={() => postRegister(formRegister)}
              loading={loading}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </WrapperScreen>
  );
};

const styles = StyleSheet.create({
  buttonDate: {
    color: '#0000EE',
  },
  inputForm: {
    borderColor: 'grey',
    borderWidth: 1,
  },
  titleText: {
    fontStyle: 'italic',
    textAlign: 'left',
    color: '#f1f1f1',
  },
  content: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardProfile: {
    padding: 24,
    borderRadius: 12,
    width: '100%',
    backgroundColor: 'white',
  },
});

export default Register;
