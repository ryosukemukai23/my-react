import {useState} from "react";
import LanguageContext from "./LanguageContext";

const translations = {
  en: {
    greeting: "Hello",
    toggle: "Switch to Japanese",
  },
  ja: {
    greeting: "こんにちは",
    toggle: "英語に切り替え",
  },
};

export default function LanguageProvider({children}) {
  const [language, setLanguage] = useState("ja");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ja" ? "en" : "ja"));
  };

  const translate = (key) => translations[language][key];

  return <LanguageContext.Provider value={{language, toggleLanguage, translate}}>{children}</LanguageContext.Provider>;
}
