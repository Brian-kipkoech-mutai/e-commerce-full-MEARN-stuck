import { useState } from "react";

const usePost = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const resetDefault = () => {
    setData(null);
    setError(null);
    setIsLoading(false)
    }

  const postData = async (userData,postFunction) => {
    try {
      resetDefault()
      setIsLoading(true);
          console.log(postFunction)
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
