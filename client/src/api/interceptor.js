import axios from 'axios';

function createAxiosInstance(useMock) {
  const instance = axios.create({
    baseURL: useMock ? MOCK_BASE : API_BASE,
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

const useMock = true; // 목업 API 사용 시 true 로 설정하세요!
const instance = createAxiosInstance(useMock);
export default instance;
