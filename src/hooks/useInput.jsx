import { useState } from "react";

export const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const onValueChange = (event) => {
    setValue(event.target.value);
  };

  return [value, onValueChange];
};
