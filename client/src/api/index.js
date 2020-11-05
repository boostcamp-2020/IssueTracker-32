import instance from './interceptor';
import axios from 'axios';

// TODO: 나중에 api 요청 추가해주세요!

const fetchIssues = () => instance.get('/issue');

export { fetchIssues };
