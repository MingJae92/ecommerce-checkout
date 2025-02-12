import { SxProps, Theme } from "@mui/material";

const navbarStyles: Record<string, SxProps<Theme>> = {
  appBar: {
    backgroundColor: "#333",
    boxShadow: "none",
    padding: "8px 16px",
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  button: {
    marginLeft: "10px",
    textTransform: "none",
  },
};

export default navbarStyles;
