import React, {useState} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Gap, TextCustom} from '../../global';
import {useDispatch, useSelector} from 'react-redux';

const Days = () => {
  // const [choosenDay, setChoosenDay] = useState(0);
  const choosenDay = useSelector(state => state.training.choosenDay);
  const dispatch = useDispatch();
  const handleChangeDay = value => {
    // setChoosenDay(value);
    dispatch({type: 'CHOOSEN_DAY', data: value});
  };

  return (
    <View style={styles.days}>
      <TextCustom style={{color: '#f1f1f1'}}>Dialy Training For You</TextCustom>
      <Gap height={12} />
      <View style={styles.container}>
        <Badges
          title={'Day 1'}
          onPress={() => {
            handleChangeDay(0);
          }}
          isActived={choosenDay === 0}
        />
        <Gap width={10} />
        <Badges
          title={'Day 2'}
          onPress={() => {
            handleChangeDay(1);
          }}
          isActived={choosenDay === 1}
        />
        <Gap width={10} />
        <Badges
          title={'Day 3'}
          onPress={() => {
            handleChangeDay(2);
          }}
          isActived={choosenDay === 2}
        />
      </View>
    </View>
  );

  function Badges({title, onPress, isActived = false}) {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.badge, isActived ? styles.activedBadge : '']}
        onPress={onPress}>
        <TextCustom
          style={[styles.textBadge, isActived ? styles.activedText : '']}>
          {title}
        </TextCustom>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  days: {
    height: Dimensions.get('window').height * 0.08,
  },
  textBadge: {
    color: 'white',
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 16,
  },
  activedText: {
    color: '#333',
  },
  activedBadge: {
    backgroundColor: '#f1f1f1',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Days;
