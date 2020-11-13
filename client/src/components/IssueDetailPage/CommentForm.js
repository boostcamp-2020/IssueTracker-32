import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { postComment } from '@api';
import CommentProfileImg from '@NewIssuePage/CommentProfileImg';

const CForm = styled.div`
  display: flex;
`;

const CommentFormBody = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 10px;
  border: 1px solid #000000;
  border-radius: 5px;
  overflow: hidden;
  padding: 10px;
`;

const CommentDetail = styled.input`
  flex: 1;
  padding: 5px;
  margin-bottom: 10px;
`;

const CommentSubmit = styled.button`
  padding: 5px 16px;
  margin-left: auto;
  border: 1px solid #888888;
  border-radius: 5px;
  background-color: #2c974b;
  color: #ffffff;
  font-weight: bold;
`;

const CommentForm = ({ issueData }) => {
  const issueId = issueData != null ? issueData.id : null;
  const [redirect, setRedirect] = useState(false);
  const [textInput, setTextInput] = useState('');

  const submitComment = async () => {
    const response = await postComment(issueId, textInput);
    setRedirect(true);
  };

  return redirect ? (
    <Redirect to={`/issuedetail/${issueId}`} />
  ) : (
    <CForm>
      <CommentProfileImg />
      <CommentFormBody>
        <CommentDetail
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Leave a comment"
        />
        <CommentSubmit onClick={submitComment}>Submit New Issue</CommentSubmit>
      </CommentFormBody>
    </CForm>
  );
};

export default CommentForm;
