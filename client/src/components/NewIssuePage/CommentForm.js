import React, { useEffect } from 'react';
import styled from 'styled-components';

const CForm = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid #999999;
  border-radius: 5px;
  margin-left: 10px;
  padding: 10px;
`;

const CommentTitle = styled.input`
  flex: 1;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 16px;
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

const CommentForm = (props) => {
  return (
    <CForm>
      <CommentTitle placeholder='Title'/>
      <CommentDetail placeholder='Leave a comment'/>
      <CommentSubmit>Submit New Issue</CommentSubmit>
    </CForm>
  );
};

export default CommentForm;
