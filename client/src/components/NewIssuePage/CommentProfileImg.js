import React, { useEffect } from 'react';
import styled from 'styled-components';

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  border-radius: 20px;
  overflow: hidden;
`;

const CommentProfileImg = (props) => {
  return (
    <ProfileImg />
  );
};

export default CommentProfileImg;
