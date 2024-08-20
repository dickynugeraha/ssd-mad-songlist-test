import React from 'react';
import WrapperScreen from '../../components/global/WrapperScreen';
import TextCustom from '../../components/global/TextCustom';
import Profile from '../../components/screens/Training/Profile';
import {Gap} from '../../components/global';
import Days from '../../components/screens/Training/Days';
import ListTraining from '../../components/screens/Training/ListTraining';
import Feedback from '../../components/screens/Training/Feedback';

const Training = () => {
  return (
    <WrapperScreen>
      <Profile />
      <Gap height={24} />
      <Days />
      <Gap height={24} />
      <ListTraining />
      <Feedback />
    </WrapperScreen>
  );
};

export default Training;
