import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useContext} from "react";
import ThemeContext from "./ThemeContext";

export default function HookThemeButton() {
  // Context から現在のテーマ情報を取得
  const {mode, toggleMode} = useContext(ThemeContext);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Typography variant="h5">
        現在のテーマ: <strong>{mode}</strong>
      </Typography>

      <Button variant="contained" color="primary" onClick={toggleMode} sx={{px: 4, py: 1.5}}>
        テーマ切り替え
      </Button>
    </Box>
  );
}
