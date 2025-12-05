import {createContext} from "react";

const LanguageContext = createContext({
  language: "ja",
  toggleLanguage: () => {},
  translate: (key) => key,
});

export default LanguageContext;
