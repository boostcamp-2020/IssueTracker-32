import instance from './interceptor';
import axios from 'axios';

// TODO: 나중에 api 요청 추가해주세요!

const fetchIssues = () => instance.get('/issue');

const fetchLabelsCount = () => instance.get('/label/count');

const fetchMilestonesCount = () => instance.get('/milestone/count');

const fetchIssuesCount = () => instance.get('/issue/count');

export { fetchIssues, fetchIssuesCount, fetchLabelsCount, fetchMilestonesCount };
