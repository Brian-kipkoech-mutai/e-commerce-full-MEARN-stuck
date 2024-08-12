import { useState, useEffect } from "react";

const useFetch = (fetchFuncntion) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setisloading] = useState(false);
  const resetDefault = () => {
    setisloading(false);
    setData(null);
    setError(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        resetDefault()
        setisloading(true);
        const {data:{message}} = await fetchFuncntion();
         
        setData(message);
        
      } catch ({message}) {
        setError(message);
      } finally {
        setisloading(false);
      }
    };

    fetchData();
  }, [fetchFuncntion]);

  return { data, error, loading };
};

export default useFetch;
