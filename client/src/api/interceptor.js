import axios from 'axios';

function createAxiosInstance() {
  const instance = axios.create({
    baseURL: API_BASE,
    timeout: 10 * 1000,
  });

  instance.interceptors.request.use(
    (config) => {
      const token = window.localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log(error);
      if (error.response.status === 401) {
        window.location.href = '/login';
      }
    },
  );

  return instance;
}

const instance = createAxiosInstance();
export default instance;
