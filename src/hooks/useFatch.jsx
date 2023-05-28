import { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../utils/api';

const useFatch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError('went something wrong', err);
      });
  }, [url]);
  return { data, error, loading };
};

export default useFatch;
