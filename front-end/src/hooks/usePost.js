import { useState } from "react";

const usePost = (postFunction) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const resetDefault = () => {
    setData(null);
    setError(null);
    setIsLoading(false)
    }

  const postData = async (userData) => {
    try {
      resetDefault()
      setIsLoading(true);
        
      const { data } = await postFunction(userData);
      console.log(data)
       
      setData(data.message);
    } catch (error) {
       
      setError(error.message);
      console.log(error.message)
    } finally {
      setIsLoading(false);
    }
  };
  return { data, error, loading, postData };
};

export default usePost;
