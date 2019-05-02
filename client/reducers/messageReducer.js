import * as types from '../constants/actionTypes';
import io from 'socket.io-client';
import { emptyStatement } from '@babel/types';

const initialState = {
  message: ['Welcome'],
  currentMessage: '',
  socket: io()
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.CURR_MESSAGE: 
      
      const newCurr = action.payload;
      return {
        ...state,
        currentMessage: newCurr
      }
    
    case types.RESET_MESSAGE: 
      // if(state.message.length > 0) {
      //   const newArr = state.message.slice(0);
      //   console.log(newArr);
      //   newArr.push(action.payload);
      // // console.log('this is the new array', newArr)
      //   let emptyString = '';
      // }
      const newArr = state.message.slice(0);
      console.log(newArr);
      newArr.push(action.payload);
    // console.log('this is the new array', newArr)
      let emptyString = '';
      
      return {
        ...state,
        message: newArr,
        currentMessage: emptyString
      }
      
    default:
      return {
        ...state,
      }
  };
};
export default messageReducer;
