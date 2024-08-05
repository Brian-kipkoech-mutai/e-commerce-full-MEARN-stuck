import { useState } from "react";

const usePost = (postFunction) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setIsLoading] = useState(false);

  const postData = async (userData) => {
    try {
      setIsLoading(true);

      const { data } = await postFunction(userData);
      console.log(data)
       
      setData(data);
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
