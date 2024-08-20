import {useState} from 'react';

export default function useTraining() {
  const [training, setTraining] = useState([
    [
      {
        level: 'Easy',
        type: 'Cardio',
        title: 'Low jogging in treatmeal',
        time: '1 Hour',
      },
      {
        level: 'MEDIUM',
        type: 'Cardio and Calistenic',
        title: 'Slow jogging, 10x pushup, 10x pullup',
        time: '1.5 Hour',
      },
      {
        level: 'HARD',
        type: 'Gym and calistenic',
        title: 'Sprint 20 minutes, pull day (chest and shoulder)',
        time: '2 Hour',
      },
      {
        level: 'VERY HARD',
        type: 'Gym and strength',
        title: 'Pull and push day',
        time: '2 Hour',
      },
    ],
    [
      {
        level: 'Easy',
        type: 'Cardio',
        title: 'Low jogging in treatmeal',
        time: '1 Hour',
      },
      {
        level: 'MEDIUM',
        type: 'Cardio and Calistenic',
        title: 'Slow jogging, 10x pushup, 10x pullup',
        time: '1.5 Hour',
      },
    ],
    [
      {
        level: 'HARD',
        type: 'Gym and calistenic',
        title: 'Sprint 20 minutes, pull day (chest and shoulder)',
        time: '2 Hour',
      },
      {
        level: 'VERY HARD',
        type: 'Gym and strength',
        title: 'Pull and push day',
        time: '2 Hour',
      },
    ],
  ]);
}
