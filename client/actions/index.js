// ACTIONS
import axios from 'axios';

import * as types from '../constants/actionTypes';

// async action creator
export const getWood = () => {
  return (dispatch) => {
    axios.get('/api/wood')
      .catch(err => {
        console.log(err);
      })
      .then(response => {
        dispatch({
          type: types.GET_WOOD,
          payload: response.data
        })
      });
  }
};

export const getStain = () => {
  return (dispatch) => {
    axios.get('/api/stain')
      .catch(err => {
        console.log(err);
      })
      .then(response => {
        dispatch({
          type: types.GET_STAIN,
          payload: response.data
        })
      });
  }
};

export const getData = () => {
  return (dispatch) => {
    axios.get('/api/analytics')
      .catch(err=> {
        console.log(err);
      })
      .then(response => {
        dispatch({
          type:types.GET_DATA,
          payload: response.data
        })
      })
  }
}

// test action creator - wood
/*export const getWood = value => {
  return {
    type: types.GET_WOOD,
    payload: [ {
      type: 'maple',
      image: 'something.jpg',
      description: 'rough',
      price: '400',
      inStock: true
    }, {
      type: 'ash',
      image: 'something.jpg',
      description: 'simple wood',
      price: '250',
      inStock: true
    } ],
  }
};*/

// test action creator - stain
/*export const getStain = value => {
  return {
    type: types.GET_STAIN,
    payload: [ {
      type: 'red',
      image: 'test.jpg',
      description: 'red',
      price: '100',
      inStock: true,
    }, {
      type: 'purple',
      image: 'test.jpg',
      description: 'purple',
      price: '100',
      inStock: true,
    } ],
  }
};*/

export const submitOrder = (value) => {
  return {
    type: types.SUBMIT_ORDER,
    payload: value
  }
};

export const selectWood = (value) => {
  // console.log('value', value);
  return {
    type: types.SELECT_WOOD,
    payload: value
  }
};
export const selectStain = (value) => {
  console.log(value);
  return {
    type: types.SELECT_STAIN,
    payload: value
  }
};


export const currentChange = (currMsg) => {
  return {
    type: types.CURR_MESSAGE,
    payload: currMsg
  }
}

export const resetCurrent = (resetMsg) => {
  return {
    type: types.RESET_MESSAGE,
    payload: resetMsg
  }
}

