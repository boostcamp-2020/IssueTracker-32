import React, { useEffect } from 'react';
import styled from 'styled-components';

import CommentProfileImg from './CommentProfileImg';
import CommentForm from './CommentForm';

const FormContainer = styled.div`
  display: flex;
  flex: 1;
`;

const CommentFormContainer = (props) => {
  return (
    <FormContainer>
      <CommentProfileImg />
      <CommentForm />
    </FormContainer>
  );
};

export default CommentFormContainer;
