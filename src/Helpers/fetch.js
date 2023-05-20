import axios from 'axios';

axios.defaults.baseURL = 'https://6464e1b9043c103502c5ae00.mockapi.io';

export const fetchUsers = async () => {
  const respond = await axios.get('/users');
  return respond.data;
};

export const putUsers = (id, newData) => {
  axios
    .put(`users/${id}`, newData)
    .then(response => {})
    .catch(error => {
      console.error('Error updating array:', error);
    });
};
