
import { useState, useEffect } from "react";

const useFetch = (fetchFuncntion) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setisloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setisloading(true);
        const response = await fetchFuncntion();
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setisloading(false);
      }
    };

    fetchData();
    return { data, error, loading };
  }, [fetchFuncntion]);
};

export default useFetch;
