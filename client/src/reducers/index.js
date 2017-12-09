import { combineReducers } from 'redux';
import mailReducer from './mailReducer';
import projectReducer from './projectReducer'

const rootReducer = combineReducers({
  sendMail: mailReducer,
  project: projectReducer
});

export default rootReducer;
