import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import rewardReducer from './reducers/rewardReducer';
import followerReducer from './reducers/followerReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  rewards: rewardReducer,
  followers: followerReducer,
});

const store = createStore(rootReducer);

export default store;
