import {createTheme, ThemeProvider} from "@mui/material/styles";
import {amber, grey} from "@mui/material/colors";
import {CssBaseline, Button, useMediaQuery} from "@mui/material";

export default function MaterialMode() {
  // OSのカラーモードを取得
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const mode = prefersDarkMode ? "dark" : "light";

  // テーマを作成
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {main: amber[500]},
            background: {default: "#fff", paper: "#fff"},
            text: {primary: grey[900]},
          }
        : {
            primary: {main: grey[500], contrastText: "#fff"},
            background: {default: grey[900], paper: grey[800]},
            text: {primary: "#fff"},
          }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{padding: "1rem"}}>
        <Button variant="contained" color="primary">
          Mode: {mode}
        </Button>
      </div>
    </ThemeProvider>
  );
}
