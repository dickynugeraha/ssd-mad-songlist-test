import React, {useMemo} from 'react';
import {Dimensions, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import Card from './Card';
import {Gap} from '../../global';

const ListTraining = () => {
  const choosenDay = useSelector(state => state.training.choosenDay);
  const trainingDayOne = useSelector(state => state.training.trainingDayOne);
  const trainingDayTwo = useSelector(state => state.training.trainingDayTwo);
  const trainingDayThree = useSelector(
    state => state.training.trainingDayThree,
  );

  let data = trainingDayOne;
  switch (choosenDay) {
    case 0:
      data = trainingDayOne;
      break;
    case 1:
      data = trainingDayTwo;
      break;
    case 2:
      data = trainingDayThree;
      break;
  }

  console.log('dataaa', trainingDayTwo);

  const trainings = useMemo(() => data, [choosenDay]);

  return (
    <View style={{height: Dimensions.get('window').height * 0.6}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={trainings}
        scrollEnabled={true}
        renderItem={({item}) => <Card item={item} />}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};

export default ListTraining;
