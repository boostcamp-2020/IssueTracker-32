import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import CommentProfileImg from '../NewIssuePage/CommentProfileImg';

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
`

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

const CommentForm = () => {
  return (
    <CForm>
      <CommentProfileImg/>
      <CommentFormBody>
        <CommentDetail placeholder='Leave a comment'/>
        <CommentSubmit>Submit New Issue</CommentSubmit>
      </CommentFormBody>
    </CForm>
  );
};

export default CommentForm;
