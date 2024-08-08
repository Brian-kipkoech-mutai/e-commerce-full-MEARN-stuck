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
  const handleSubmit = (e, submitFunction) => {
    e.preventDefault();

    submitFunction(formData);
  };
  return { handleChange, handleSubmit };
};
export default useFormData;
