import {combineReducers} from 'redux';
import registerReducer from './Register/reducer';
import trainingReducer from './Training/reducer';

const rootReducer = combineReducers({
  register: registerReducer,
  training: trainingReducer,
});

export default rootReducer;
