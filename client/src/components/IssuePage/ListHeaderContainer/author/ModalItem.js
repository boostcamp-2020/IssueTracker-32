import React, { useEffect } from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: solid 1px #dee2e6;
  padding: 6px;
`;

const ImgWrapper = styled.img`
  width: 14px;
  height: 14px;
  border-radius: 14px;
`;

const NameText = styled.p`
  font-weight: 500;
`;

const SubText = styled.p`
  font-weight: 500;
`;

const ModalItem = (props) => {
  const githubId = props.data.github_id;
  const nickname = props.data.nickname;
  const profileImageURL = props.data.profile_img_url;

  return (
    <ItemWrapper>
      <ImgWrapper src={profileImageURL} />
      <NameText> {githubId} </NameText>
      <SubText> {nickname} </SubText>
    </ItemWrapper>
  );
};

export default ModalItem;
