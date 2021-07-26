import { useState } from 'react';

const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (event) => {
    const { checked, name } = event.target;
    setFormData({ ...formData, [name]: checked });
  };

  const clear = () => {
    setFormData(initialState);
  };

  return [formData, handleInputChange, handleRadioChange, clear, setFormData];
};

export default useForm;
