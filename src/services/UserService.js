import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users/';

const getUsers = () => {
  return axios.get(API_URL);
};

const getUserById = (id) => {
  return axios.get(API_URL + id);
};

const createUser = (user) => {
  return axios.post(API_URL, user);
};

const updateUser = (id, user) => {
  return axios.put(API_URL + id, user);
};

const deleteUser = (id) => {
  return axios.delete(API_URL + id);
};

const getCurrentUser = () => {
  return axios.get(API_URL + 'profile');
};

const UserService = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getCurrentUser
};

export default UserService;
