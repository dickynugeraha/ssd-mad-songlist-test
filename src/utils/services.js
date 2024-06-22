import axios from 'axios';
import {queryParams} from './helpers';
export const BASE_URL = 'https://itunes.apple.com';

export const getDataSearchWithParams = async params => {
  return axios.get(`${BASE_URL}/search?${queryParams(params)}`);
};
