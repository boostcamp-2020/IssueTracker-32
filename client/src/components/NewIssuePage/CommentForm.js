import React, { useEffect, useContext, useState } from 'react';
import  { Redirect } from 'react-router-dom'
import styled from 'styled-components';
import { NewIssueContext } from '@context/NewIssueContext';
import { postNewIssue } from '@api';

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
  const [redirect, setRedirect] = useState(false);

  const newIssueContext = useContext(NewIssueContext);

  const submitNewIssue = async () => {
    const { title, detail } = newIssueContext;
    await postNewIssue(title, detail);
    setRedirect(true);
    return <Redirect to='/' />
  }

  return redirect ? (<Redirect to='/' />) : (
    <CForm>
      <CommentTitle value={newIssueContext.title} onChange={(e) => newIssueContext.setTitle(e.target.value)} placeholder='Title'/>
      <CommentDetail value={newIssueContext.detail} onChange={(e) => newIssueContext.setDetail(e.target.value)} placeholder='Leave a comment'/>
      <CommentSubmit onClick={submitNewIssue}>Submit New Issue</CommentSubmit>
    </CForm>
  );
};

export default CommentForm;
