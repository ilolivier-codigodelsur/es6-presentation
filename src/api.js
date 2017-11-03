import axios from 'axios';

export function getUsers() {
  return axios.get('/users');
}
export function getUser(id) {
  return axios.get(`/users/${id}`);
}
export function updateUser(id, fields) {
  return axios.patch(`/users/${id}`, fields);
}