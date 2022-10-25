import { useContext } from "react";
import { LocalizationContext } from "../contexts/LocalizationContext";
import { content } from "../utils/content";

export const useLocalization = (language) => {
  const { localization } = useContext(LocalizationContext);

  const text = content[`${language}`][localization];

  return text;
};
