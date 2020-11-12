import React, { useEffect } from 'react';
import styled from 'styled-components';

import CommentListItem from './CommentListItem';
import CommentForm from './CommentForm';

const List = styled.div`
  flex: 1;
`;

const CommentList = (props) => {
  const issueData = props.issueData;

  return (
    <List>
      { 
        issueData
          ? issueData.comments.map((comment, i) => {
            return (<CommentListItem comment={comment}/>)
          })
          : (null)
      } 
      <CommentForm />
    </List>
  );
};

export default CommentList;
