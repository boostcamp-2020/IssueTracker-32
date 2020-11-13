import instance from './interceptor';
import axios from 'axios';

// TODO: 나중에 api 요청 추가해주세요!

const transformBoolToInt = (boolean) => {
  if (boolean == null) return null;
  return boolean === true ? 1 : 0;
};

const fetchUsers = () => instance.get('/user');

const fetchLabels = () => instance.get('/label');

const fetchLabelsCount = () => instance.get('/label/count');

const fetchMilestones = () => instance.get('/milestone');

const fetchMilestonesCount = () => instance.get('/milestone/count');

const fetchIssues = () => instance.get('/issue');

const fetchIssueDetail = (issueId) => instance.get(`/issue/${issueId}`);

const fetchIssuesCount = () => instance.get('/issue/count');

const fetchIssuesWithData = (data) =>
  instance.get('/issue', {
    params: {
      is_open: transformBoolToInt(data.isOpen),
      author: data.author,
      label: data.label,
      milestone: data.milestone,
      assignee: data.assignee,
    },
  });

const postNewIssue = (title, detail) => {
  console.log(title, detail);
  return instance.post('/issue', {
    title: title,
    detail: detail
  });
}

export {
  fetchUsers,
  fetchLabels,
  fetchLabelsCount,
  fetchMilestones,
  fetchMilestonesCount,
  fetchIssues,
  fetchIssueDetail,
  fetchIssuesCount,
  fetchIssuesWithData,
  postNewIssue,
};
