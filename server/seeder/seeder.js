const db = require('../models/index');
const { Issue, Comment, User, Label, Milestone } = db;

module.exports = async () => {
  await Milestone.bulkCreate([
    {
      is_open: 1,
      title: 'WEEK 1',
    },
    {
      is_open: 1,
      title: 'WEEK 2',
    },
    {
      is_open: 1,
      title: 'WEEK 3',
    },
  ]);

  const users = await User.bulkCreate([
    {
      nickname: 'JuHy',
      github_id: 'JuHyeon-Lee',
      profile_img_url: 'https://avatars1.githubusercontent.com/u/24909656?v=4',
    },
    {
      github_id: 'HangraeCho',
      nickname: null,
      profile_img_url:
        'http://www.tinygraphs.com/spaceinvaders/tinygraphs?theme=summerwarmth&numcolors=3&size=220&fmt=svg',
    },
    {
      nickname: 'SeungJin-Woo',
      github_id: 'woo123',
      profile_img_url:
        'http://www.tinygraphs.com/labs/isogrids/hexa16/tinygraphs?theme=berrypie&numcolors=3&size=220&fmt=svg',
    },
    {
      nickname: 'JeongHyun-Son',
      github_id: 'JeongHyun',
      profile_img_url:
        'http://tinygraphs.com/squares/tinygraphs?theme=frogideas&numcolors=4&size=220&fmt=svg',
    },
  ]);

  const label_api = await Label.create({
    name: 'API',
    description: 'API develop',
    color: '#000000',
  });

  const label_feature = await Label.create({
    name: 'Feature',
    description: 'New Feature',
    color: '#FFFFFF',
  });

  const label_backend = await Label.create({
    name: 'Backend',
    description: 'for backend',
    color: '#00FF00',
  });

  const label_frontend = await Label.create({
    name: 'Frontend',
    description: 'for Frontend',
    color: '#FF0000',
  });

  const label_boostcamp = await Label.create({
    name: 'Boostcamp',
    description: 'for boostcamp',
    color: '#FFFF00',
  });

  const label_play = await Label.create({
    name: 'Play',
    description: 'for play',
    color: '#CCEEFF',
  });

  const issue_test1 = await Issue.create({
    is_open: 1,
    title: 'test issue 1',
    milestone_id: 1,
    author_id: 1,
  });

  const issue_test2 = await Issue.create({
    is_open: 1,
    title: 'test issue 2',
    milestone_id: 2,
    author_id: 2,
  });

  const issue_test3 = await Issue.create({
    is_open: 0,
    title: 'test issue 3',
    milestone_id: 2,
    author_id: 3,
  });

  const issue_test4 = await Issue.create({
    is_open: 1,
    title: 'test issue 4',
    milestone_id: 1,
    author_id: 4,
  });

  const issue_test5 = await Issue.create({
    is_open: 0,
    title: 'test issue 5',
    milestone_id: 3,
    author_id: 4,
  });

  const comment1 = await Comment.create({
    user_id: 1,
    issue_id: 1,
    mandatory: 1,
    detail: '저는 1번 댓글입니다요',
  });

  const comment2 = await Comment.create({
    user_id: 2,
    issue_id: 1,
    mandatory: 0,
    detail: '저는 2번 댓글입니다요',
  });

  const comment3 = await Comment.create({
    user_id: 2,
    issue_id: 2,
    mandatory: 1,
    detail: '저는 3번 댓글입니다요',
  });

  const comment4 = await Comment.create({
    user_id: 3,
    issue_id: 2,
    mandatory: 0,
    detail: '저는 4번 댓글입니다요',
  });

  const comment5 = await Comment.create({
    user_id: 3,
    issue_id: 3,
    mandatory: 1,
    detail: '저는 5번 댓글입니다요',
  });

  const comment6 = await Comment.create({
    user_id: 4,
    issue_id: 4,
    mandatory: 1,
    detail: '저는 댓글입니다요',
  });

  const comment7 = await Comment.create({
    user_id: 1,
    issue_id: 4,
    mandatory: 0,
    detail: '상대가 나잖아',
  });

  const comment8 = await Comment.create({
    user_id: 4,
    issue_id: 5,
    mandatory: 1,
    detail: '전 하기 싫어요',
  });

  const comment9 = await Comment.create({
    user_id: 2,
    issue_id: 5,
    mandatory: 0,
    detail: '인정',
  });

  await issue_test1.addLabel(label_api);
  await issue_test1.addLabel(label_feature);
  await issue_test1.addLabel(label_boostcamp);

  await issue_test2.addLabel(label_api);
  await issue_test2.addLabel(label_backend);

  await issue_test3.addLabel(label_feature);
  await issue_test3.addLabel(label_frontend);

  await issue_test4.addLabel(label_frontend);
  await issue_test4.addLabel(label_feature);
  await issue_test4.addLabel(label_api);

  await issue_test5.addLabel(label_play);
  await issue_test5.addLabel(label_boostcamp);

  await issue_test1.addAssignees(users[0]);
  await issue_test1.addAssignees(users[1]);
  await issue_test1.addAssignees(users[2]);

  await issue_test2.addAssignees(users[1]);
  await issue_test2.addAssignees(users[2]);

  await issue_test3.addAssignees(users[0]);
  await issue_test3.addAssignees(users[3]);

  await issue_test3.addAssignees(users[1]);
  await issue_test3.addAssignees(users[2]);

  await issue_test3.addAssignees(users[2]);
  await issue_test3.addAssignees(users[3]);
};
