import axios from 'axios';

axios.defaults.baseURL = 'https://prepare-test-api-service.onrender.com/api';

export const fetchUsers = async () => {
  try {
    const { data } = await axios.get('/user');
    return data;
  } catch (error) {
    console.log(error);
  }
};
