import axios from 'axios';

export default function api(isContentJSON = false, token = '') {
  const type = isContentJSON ? 'json' : 'x-www-form-urlencoded';

  const axiosInstance = axios.create({
    baseURL: process.env.KEYCLOACK_URL,
    headers: {
      'Content-Type': `application/${type}`,
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    },
    maxBodyLength: Infinity,
  });

  if (token)
    axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;

  return axiosInstance;
}
