import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => window.localStorage.getItem(key) || initialValue);

  const setLocalStorageValue = (value) => {
    setValue(value);
    window.localStorage.setItem(key, value);
  };

  return [value, setLocalStorageValue];
};

const useFetch = (asyncFunc) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const { data } = await asyncFunc();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, setData];
};

export { useLocalStorage, useFetch };
