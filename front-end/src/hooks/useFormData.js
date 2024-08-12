import { useState } from "react";

const useFormData = () => {
  const [formData, setFormData] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return { handleChange, formData };
};
export default useFormData;
