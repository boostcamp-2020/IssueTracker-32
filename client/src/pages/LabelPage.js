import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import LabelList from '../components/LabelPage/LabelList';
import { fetchLabels } from '../api';

const LabelPageEl = styled.div`
  margin: 20px 0;
`;

const LabelPage = () => {
  const [Labels, setLabels] = useState([]);  
  const fetchLabelData = async () => {
    const { data } = await fetchLabels();
    const fetchedLabelsData = data;
    setLabels(fetchedLabelsData);
    return;
  };
  
  useEffect(() => {
    fetchLabelData();
  }, []);

  return (
    <LabelPageEl>
      <LabelList LabelList={Labels}/>
    </LabelPageEl>
  );
};

export default LabelPage;
