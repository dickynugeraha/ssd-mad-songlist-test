const initialState = {
  trainingDayOne: [
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
  feedbackDayOne: '',
  trainingDayTwo: [
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
      level: 'VERY HARD',
      type: 'Gym and strength',
      title: 'Pull and push day',
      time: '2 Hour',
    },
  ],
  feedbackDayTwo: '',
  trainingDayThree: [
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
  feedbackDayThree: '',
  choosenDay: 0,
};

const trainingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FEEDBACK_DAY1':
      return {
        ...state,
        feedbackDayOne: action.data,
      };
    case 'SET_FEEDBACK_DAY2':
      return {
        ...state,
        feedbackDayTwo: action.data,
      };
    case 'SET_FEEDBACK_DAY3':
      return {
        ...state,
        feedbackDayThree: action.data,
      };
    case 'CHOOSEN_DAY':
      return {
        ...state,
        choosenDay: action.data,
      };
    default:
      return state;
  }
};

export default trainingReducer;
//
