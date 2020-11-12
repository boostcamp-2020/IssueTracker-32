import instance from './interceptor';
import axios from 'axios';

// TODO: 나중에 api 요청 추가해주세요!

const transformBoolToInt = (boolean) => {
  return boolean === true ? 1 : 0;
};

const fetchIssues = () => instance.get('/issue');

const fetchIssuesCount = () => instance.get('/issue/count');

const fetchIssueDetail = (issueId) => instance.get(`/issue/${issueId}`);

const fetchIssuesWithData = (data) =>
  instance.get('/issue', {
    params: {
      is_open: transformBoolToInt(data.isOpen),
      author_id: data.author,
      label: data.label,
      milestone_id: data.milestone,
      assiginee: data.assiginee,
    },
  });

const fetchLabels = () => instance.get('/label');

const fetchLabelsCount = () => instance.get('/label/count');

const fetchMilestones = () => instance.get('/milestone');

const fetchMilestonesCount = () => instance.get('/milestone/count');

const fetchUsers = () => instance.get('/user');

export {
  fetchIssues,
  fetchIssuesCount,
  fetchIssueDetail,
  fetchIssuesWithData,
  fetchLabels,
  fetchLabelsCount,
  fetchMilestones,
  fetchMilestonesCount,
  fetchUsers,
};
