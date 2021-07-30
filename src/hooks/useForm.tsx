import { useState } from "react";

export const useForm = (options: any) => {
  const [values, setValues] = useState(options?.initialValues || {});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setValues((prevValues) => ({
      ...input,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { type, name } = e.target;
    const getValue = () => {
      if (type === "checkbox") {
        return e.target.checked;
      } else if (type === "select-multiple") {
        return Array.from(e.target.selectedOptions).map((o: any) => o.value);
      }
      return e.target.value;
    };
    const value = getValue();
    setValues((prevValues: object) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (onSubmit: any) => {
    return (e: any) => {
      if (e && typeof e.preventDefault === "function") {
        e.preventDefault();
      }
      onSubmit(values, e);
    };
  };
  return {
    values,
    setValues,
    handleChange,
    handleSubmit,
  };
};
