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

    await User.bulkCreate([
        {
            nickname: "JuHy",
            github_id: "JuHyeon-Lee",
            profile_img_url: "https://avatars1.githubusercontent.com/u/24909656?v=4"
        },
        {
            nickname: "HangRae-Jo",
            github_id: "meinewq",
            profile_img_url: "https://avatars1.githubusercontent.com/u/24909656?v=4"
        }
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
        author_id: 1
    });

    const issue_test2 = await Issue.create({
        is_open: 1,
        title: 'test issue 2',
        milestone_id: 2,
        author_id: 2
    })

    await issue_test1.addLabel(label_api);
    await issue_test1.addLabel(label_feature);
    await issue_test2.addLabel(label_api);

}