import React from 'react';
import WrapperScreen from '../../components/global/WrapperScreen';
import Card from '../../components/screens/Detail/Card';

const Detail = ({route}) => {
  const {data} = route.params;

  return (
    <WrapperScreen>
      <Card data={data} />
    </WrapperScreen>
  );
};

export default Detail;
