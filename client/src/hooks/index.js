import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => window.localStorage.getItem(key) || initialValue);

  const setLocalStorageValue = (value) => {
    setValue(value);
    window.localStorage.setItem(key, value);
  };

  return [value, setLocalStorageValue];
};

const useFetch = (initialValue, asyncFunc) => {
  const [data, setData] = useState(initialValue);

  const fetchData = async () => {
    const { data } = await asyncFunc();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, setData];
};

const useFetchWithParams = (initialValue, asyncFunc, params) => {
  const [data, setData] = useState(initialValue);

  const fetchDataWithParams = async () => {
    const { data } = await asyncFunc(params);
    setData(data);
  };

  useEffect(() => {
    fetchDataWithParams();
  }, []);

  return [data, setData];
};

export { useLocalStorage, useFetch, useFetchWithParams };
