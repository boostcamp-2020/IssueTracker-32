import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { FilterContext } from '@context/FilterContext';

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: solid 1px #dee2e6;
  padding: 6px;
`;

const ImgWrapper = styled.img`
  width: 18px;
  height: 18px;
  border-radius: 14px;
`;

const NameText = styled.p`
  margin: 0px 0px 0px 10px;
  font-weight: 500;
`;

const SubText = styled.p`
  margin: 0px 0px 0px 10px;
  font-size: 12px;
  color: #868e96;
`;

const ModalItem = (props) => {
  const filterContext = useContext(FilterContext);

  const userId = props.data.id;
  const githubId = props.data.github_id;
  const nickname = props.data.nickname;
  const profileImageURL = props.data.profile_img_url;

  const selectUser = () => {
    filterContext.setAuthor(userId);
  };

  return (
    <ItemWrapper onClick={selectUser}>
      <ImgWrapper src={profileImageURL} />
      <NameText> {githubId} </NameText>
      <SubText> {nickname} </SubText>
    </ItemWrapper>
  );
};

export default ModalItem;
