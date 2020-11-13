import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LabelItem from '../Common/LabelItem';

const LabelListEl = styled.div`
  border: 1px solid #e1e4e8;
  border-radius: 5px;
  overflow: hidden;
`;

const LabelListHeaderEl = styled.div`
  background-color: #f6f8fa;
  padding: 10px;
`;

const LabelListItemEl = styled.div`
  display: flex;
  border-top: 1px solid #e1e4e8;
  padding: 10px;
`;

const LabelDescriptionEl = styled.div`
  margin-left: auto;
`;

const LabelList = (props) => {
  const Labels = props.LabelList;

  return (
    <LabelListEl>
      <LabelListHeaderEl> {Labels.length} labels </LabelListHeaderEl>
      {
        Labels.length > 0 ? Labels.map((label, i) => {
          return (
            <LabelListItemEl>
              <LabelItem label={label}/>
              <LabelDescriptionEl>{label.description}</LabelDescriptionEl>
            </LabelListItemEl>
          )
        }) : null
      }
    </LabelListEl>
  );
};

export default LabelList;
