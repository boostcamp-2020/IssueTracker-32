import React, { useEffect } from 'react';
import styled from 'styled-components';
import { testAPI } from '../api';

const IssuePage = () => {
  useEffect(() => {
    const fetch = async () => {
      return await testAPI();
    };
    const data = fetch();
    console.log(data);
  }, []);

  return <p> issue page</p>;
};

export default IssuePage;
