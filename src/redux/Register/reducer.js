const initialState = {
  name: '',
  dob: null,
  height: '',
  weight: '',
  bloodtype: '',
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REGISTER':
      return {
        ...action.data,
      };
    default:
      return state;
  }
};

export default registerReducer;
