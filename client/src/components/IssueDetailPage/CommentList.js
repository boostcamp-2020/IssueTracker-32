import React, { useEffect } from 'react';
import styled from 'styled-components';

import CommentListItem from './CommentListItem';
import CommentForm from './CommentForm';

const List = styled.div`
  flex: 1;
`;

const CommentList = (props) => {
  return (
    <List>
      <CommentListItem />
      <CommentForm />
    </List>
  );
};

export default CommentList;
