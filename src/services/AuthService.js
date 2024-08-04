import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

const login = (username, password) => {
  return axios.post(API_URL + 'signin', { username, password });
};

const register = (username, password, role) => {
  return axios.post(API_URL + 'signup', { username, password, role });
};

const forgotPassword = (email) => {
  return axios.post(API_URL + 'forgot-password', { email });
};

const resetPassword = (newPassword) => {
  return axios.post(API_URL + 'reset-password', { newPassword });
};

const AuthService = {
  login,
  register,
  forgotPassword,
  resetPassword
};

export default AuthService;
