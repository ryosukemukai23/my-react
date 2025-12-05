import {useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {amber, grey} from "@mui/material/colors";
import {
  CssBaseline,
  Button,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  Switch,
} from "@mui/material";

export default function ChangeThemeMui() {
  const [type, setType] = useState("button");
  const [mode, setMode] = useState("light");

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const toggleMode = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  const handleThemeChange = (e) => {
    setMode(e.target.value);
  };

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: amber,
          }
        : {
            primary: {
              main: grey[500],
              contrastText: "#fff",
            },
            background: {
              default: grey[900],
              paper: grey[900],
            },
          }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FormLabel component="legend">表示タイプ</FormLabel>
      <RadioGroup value={type} onChange={handleTypeChange}>
        <FormControlLabel value="button" control={<Radio />} label="ボタン" />
        <FormControlLabel value="select" control={<Radio />} label="セレクト" />
        <FormControlLabel value="switch" control={<Radio />} label="スイッチ" />
        <FormControlLabel value="radio" control={<Radio />} label="ラジオ" />
      </RadioGroup>

      <FormLabel component="legend">カラーモード</FormLabel>
      {type === "button" && (
        <Button variant="contained" onClick={toggleMode}>
          {mode === "light" ? "ダークモード" : "ライトモード"}
        </Button>
      )}
      {type === "select" && (
        <Select value={mode} onChange={handleThemeChange}>
          <MenuItem value="light">ライトモード</MenuItem>
          <MenuItem value="dark">ダークモード</MenuItem>
        </Select>
      )}
      {type === "switch" && <Switch checked={mode === "dark"} onChange={toggleMode} />}
      {type === "radio" && (
        <>
          <FormControlLabel
            control={<Radio checked={mode === "light"} onChange={() => setMode("light")} />}
            label="ライトモード"
          />
          <FormControlLabel
            control={<Radio checked={mode === "dark"} onChange={() => setMode("dark")} />}
            label="ダークモード"
          />
        </>
      )}
    </ThemeProvider>
  );
}
