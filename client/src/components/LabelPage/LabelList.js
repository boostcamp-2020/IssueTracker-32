import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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
  border-top: 1px solid #e1e4e8;
  padding: 10px;
`;

const LabelList = (props) => {
  return (
    <LabelListEl>
      <LabelListHeaderEl>Header</LabelListHeaderEl>
      <LabelListItemEl>Item</LabelListItemEl>
    </LabelListEl>
  );
};

export default LabelList;
