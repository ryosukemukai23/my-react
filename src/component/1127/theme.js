// ✅ createTheme と色のimportを必ず最初に書く！
import {createTheme} from "@mui/material/styles";
import {green, orange} from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
  spacing: 10,
});

export default theme;
