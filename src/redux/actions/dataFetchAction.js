import {
  createStore,
  applyMiddleware,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
  isLoaded: true,
  spacecraft: [],
  error: '',
};

const FETCH_SPACECRAFT_REQUEST = 'FETCH_SPACECRAFT';
const FETCH_SPACECRAFT_SUCCESS = 'FETCH_SPACECRAFT_SUCCESS';
const FETCH_SPACECRAFT_FAILURE = 'FETCH_SPACECRAFT_FAILURE';

const fetchSpacecraftRequest = () => {
  return {
    type: FETCH_SPACECRAFT_REQUEST,
  };
};

const fetchSpacecraftSuccess = (spacecraft) => {
  return {
    type: FETCH_SPACECRAFT_SUCCESS,
    payload: spacecraft,
  };
};

const fetchSpacecraftFailure = (error) => {
  return {
    type: FETCH_SPACECRAFT_FAILURE,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPACECRAFT_REQUEST:
      return {
        ...state,
        isLoaded: false,
      };

    case FETCH_SPACECRAFT_SUCCESS:
      return {
        isLoaded: true,
        spacecraft: action.payload,
        error: '',
      };

    case FETCH_SPACECRAFT_FAILURE:
      return {
        isLoaded: true,
        spacecraft: [],
        error: action.payload,
      };

    default:
      return;
  }
};

const fetchSpacecraft = () => {
  return function (dispatch) {
    dispatch(fetchSpacecraftRequest());
    axios
      .get('https://lldev.thespacedevs.com/2.2.0/spacecraft/')
      .then((response) => {
        const spacecraft = response.data;
        dispatch(fetchSpacecraftSuccess(spacecraft));
      })
      .catch((error) => {
        dispatch(fetchSpacecraftFailure(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchSpacecraft());

//npm install react-redux @reduxjs/toolkit
