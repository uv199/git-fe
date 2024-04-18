// services/Job.js
import axios from '../axios';

const fetchUser = async () => {
  try {
    const response = await axios.get('/jobs');
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }
};

export { fetchUser };