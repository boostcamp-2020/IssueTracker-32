const db = require('../models/index');
const { Issue, Comment, User, Label, Milestone } = db;

module.exports = async () => {
    await Milestone.bulkCreate([
        {
            is_open: 1,
            title: "WEEK 1"
        },
        {
            is_open: 1,
            title: "WEEK 2"
        }
    ]);

    const users = await User.bulkCreate([
        {
            nickname: "JuHy",
            github_id: "JuHyeon-Lee",
            profile_img_url: "https://avatars1.githubusercontent.com/u/24909656?v=4"
        },
        {
            github_id: "HangraeCho",
            nickname: null,
            profile_img_url: "https://avatars0.githubusercontent.com/u/59906285?v=4"
        },
        {
            nickname: "SeungJin-Woo",
            github_id: "woo123",
            profile_img_url: "https://avatars1.githubusercontent.com/u/24909656?v=4"
        },
    ]);

    const label_api = await Label.create({
        name: "API",
        description: "API develop",
        color: "#000000"
    });

    const label_feature = await Label.create({
        name: "Feature",
        description: "New Feature",
        color: "#FFFFFF"
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
    })

    const issue_test3 = await Issue.create({
        is_open: 0,
        title: 'test issue 3',
        milestone_id: 2,
        author_id: 3,
    })

    const comment1 = await Comment.create({
        user_id: 1,
        issue_id: 1,
        mandatory: 1,
        detail: "저는 1번 댓글입니다요",
    });

    const comment2 = await Comment.create({
        user_id: 2,
        issue_id: 1,
        mandatory: 0,
        detail: "저는 2번 댓글입니다요",
    });

    const comment3 = await Comment.create({
        user_id: 2,
        issue_id: 2,
        mandatory: 1,
        detail: "저는 3번 댓글입니다요",
    });

    const comment4 = await Comment.create({
        user_id: 3,
        issue_id: 2,
        mandatory: 0,
        detail: "저는 4번 댓글입니다요",
    });

    const comment5 = await Comment.create({
        user_id: 3,
        issue_id: 3,
        mandatory: 1,
        detail: "저는 5번 댓글입니다요",
    });

    await issue_test1.addLabel(label_api);
    await issue_test1.addLabel(label_feature);
    await issue_test2.addLabel(label_api);
    await issue_test3.addLabel(label_feature);

    await issue_test1.addAssignees(users[0]);
    await issue_test1.addAssignees(users[1]);
    await issue_test1.addAssignees(users[2]);

    await issue_test2.addAssignees(users[1]);
    await issue_test2.addAssignees(users[2]);

    await issue_test3.addAssignees(users[0]);
    await issue_test3.addAssignees(users[2]);
}
