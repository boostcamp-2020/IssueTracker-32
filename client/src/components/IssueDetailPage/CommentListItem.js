import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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

const CommentListItem = () => {
  return (
    <CommentItem>
      <CommentProfileImg/>
      <CommentBody>
        <CommentInfo>JuHyeon-Lee commented 2 days ago</CommentInfo>
        <CommentDetail>
            <p>UI 구현</p>
        </CommentDetail>
      </CommentBody>
    </CommentItem>
  );
};

export default CommentListItem;
