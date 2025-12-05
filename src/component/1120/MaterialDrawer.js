import {useState} from "react";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import InfoIcon from "@mui/icons-material/Info";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import {css} from "@emotion/react";

// メニュー配列
const menu = [
  {name: "Home", icon: <HomeIcon />, link: "/"},
  {name: "Mail", icon: <MailIcon />, link: "/mail"},
  {name: "Info", icon: <InfoIcon />, link: "/info"},
  {name: "AccountTree", icon: <AccountTreeIcon />, link: "/accounttree"},
];

// CSSスタイル
const drawerStyle = css`
  .MuiDrawer-paper {
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    backdrop-filter: blur(12px);
    background-color: rgba(255, 255, 255, 0.85);
    padding: 16px 0;
    min-height: 300px;
  }
`;

const listItemStyle = css`
  border-radius: 12px;
  margin: 8px 16px;
  transition: all 0.3s ease;
  &:hover {
    background: #e0f7fa;
    transform: translateY(-2px);
  }
`;

const iconStyle = css`
  color: #00bcd4;
`;

export default function MaterialDrawer() {
  const [show, setShow] = useState(false);
  const handleDraw = () => setShow(!show);

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleDraw}
        sx={{borderRadius: 3, padding: "8px 24px", fontWeight: "bold", boxShadow: 3}}
      >
        Open Menu
      </Button>

      <Drawer anchor="bottom" open={show} onClose={handleDraw} css={drawerStyle} elevation={12} hideBackdrop={false}>
        <Typography variant="h6" align="center" sx={{mb: 2, fontWeight: "bold", color: "#00796b"}}>
          Menu
        </Typography>
        <Divider />
        <List>
          {menu.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton css={listItemStyle} onClick={handleDraw}>
                <ListItemIcon css={iconStyle}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} primaryTypographyProps={{fontWeight: "medium", fontSize: "1.1rem"}} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
