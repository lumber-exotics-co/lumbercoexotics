// Merges all of our reducers, tells us how our stores accesses them
import { combineReducers } from 'redux'
import catalogReducer from './catalogReducer'
import cartReducer from './cartReducer';
import messageReducer from './messageReducer';

const reducers = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
  messages: messageReducer
});

export default reducers;
