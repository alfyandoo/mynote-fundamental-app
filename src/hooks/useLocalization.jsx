import { useContext } from "react";
import { LocalizationContext } from "../contexts/LocalizationContext";
import { content } from "../utils/content";

export const useLocalization = (type) => {
  const { localization } = useContext(LocalizationContext);

  const text = content[`${type}`][localization];

  return text;
};
