import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const useApiFetch = (url, options = {}, dependencies = []) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = Cookies.get('innerViews-access-token');

        if (!token) {
          throw new Error('No access token found. Please log in.');
        }

        const defaultOptions = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `JWT ${token}`,
          },
        };

        const response = await fetch(url, { ...defaultOptions, ...options });

        if (!response.ok) {
          throw new Error(`HTTP error! Status ${response.status}`);
        }

        const result = await response.json();
        setData(result); // Line 34 referenced in the error.
      } catch (err) {
        setError(err.message || 'Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Line 42 referenced in the error.
  }, [url, options, ...dependencies]);

  return { data, error, loading };
};

export default useApiFetch;