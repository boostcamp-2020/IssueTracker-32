import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

import CommentProfileImg from '../NewIssuePage/CommentProfileImg';

const CommentItem = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const CommentBody = styled.div`
  flex: 1;
  margin-left: 10px;
  border: 1px solid #000000;
  border-radius: 5px;
  overflow: hidden;
`;

const CommentInfo = styled.div`
  background-color: #e1e4e8;
  padding: 10px;
`;

const CommentDetail = styled.div`
  padding: 10px;
`;

const timeAgo = new TimeAgo('en-US');

const makeSubText = (github_id, created_at) => {
  const createdDate = new Date(created_at);
  const timeString = timeAgo.format(createdDate, 'round');
  const githubString = github_id;
  const subText = `${githubString} commented ${timeString}`;
  return subText;
};

const CommentListItem = (props) => {
  const comment = props.comment;

  return (
    <CommentItem>
      <CommentProfileImg/>
      <CommentBody>
        <CommentInfo>{makeSubText('AUTHOR', comment.created_at)}</CommentInfo>
        <CommentDetail>
            <p>{comment.detail}</p>
        </CommentDetail>
      </CommentBody>
    </CommentItem>
  );
};

export default CommentListItem;
