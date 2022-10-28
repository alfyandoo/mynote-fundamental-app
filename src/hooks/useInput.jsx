import { useState } from "react";

export const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const onValueChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  return [value, onValueChange];
};
