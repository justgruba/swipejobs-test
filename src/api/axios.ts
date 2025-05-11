import Axios from 'axios';

export const axios = Axios.create({
  baseURL: `https://test.swipejobs.com/api/`,
});
