import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import LabelList from '../components/LabelPage/LabelList';

const LabelPageEl = styled.div`
  margin: 20px 0;
`;

const LabelPage = () => {
  return (
    <LabelPageEl>
      <LabelList/>
    </LabelPageEl>
  );
};

export default LabelPage;
