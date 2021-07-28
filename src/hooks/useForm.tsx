import { useState } from "react";

export const useForm = (options: any) => {
  const [data, setData] = useState(options?.initialValues || {});
};
