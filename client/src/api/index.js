import instance from './interceptor';
import axios from 'axios';

// TODO: 나중에 api 요청 추가해주세요!

const transformBoolToInt = (boolean) => {
  return boolean === true ? 1 : 0;
};

const fetchIssues = () => instance.get('/issue');

const fetchLabelsCount = () => instance.get('/label/count');

const fetchMilestonesCount = () => instance.get('/milestone/count');

const fetchIssuesCount = () => instance.get('/issue/count');

const fetchUsers = () => instance.get('/user');

const fetchIssuesWithData = (data) =>
  instance.get('/issue', {
    params: {
      is_open: transformBoolToInt(data.isOpen),
      author_id: data.author,
      labels: data.labels,
      milestone_id: data.milestone,
      assiginee: data.assiginee,
    },
  });

export {
  fetchIssues,
  fetchIssuesCount,
  fetchLabelsCount,
  fetchMilestonesCount,
  fetchUsers,
  fetchIssuesWithData,
};
