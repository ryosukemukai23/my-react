import {Button} from "@mui/material";
import {useContext} from "react";
import LanguageContext from "./LanguageContext";

export default function LanguageToggleButton() {
  const {toggleLanguage, translate} = useContext(LanguageContext);

  return (
    <Button variant="contained" onClick={toggleLanguage}>
      {translate("toggle")}
    </Button>
  );
}
