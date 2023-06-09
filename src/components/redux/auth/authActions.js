import axiosinstance from '../../../api/axiosinstance'
// authActions.js

import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './authTypes';

// Register user
export const register = (userData) => async (dispatch) => {
  try {
    const res = await axiosinstance.post('/api/auth/register', userData);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE,
      payload: error.response.data.error,
    });
  }
};

// Login user
export const login = (userData) => async (dispatch) => {
  // try {
    const res = await axiosinstance.post('/api/auth/login', userData);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    console.log('Logged in As',res.data);
  // } catch (error) {
  //   dispatch({
  //     type: LOGIN_FAILURE,
  //     payload: error.response.data.error,
  //   });
  // }
};

// Logout user
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
