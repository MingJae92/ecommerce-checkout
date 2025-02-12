import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import navbarStyles from "../../styles/navbarstyles/navbar.styles";

const Navbar = () => {
  return (
    <AppBar position="static" sx={navbarStyles.appBar}>
      <Toolbar sx={navbarStyles.toolbar}>
        {/* Store Name */}
        <Typography variant="h6" sx={navbarStyles.title}>
          My Store
        </Typography>

        {/* Navigation Buttons */}
        <Button color="inherit" sx={navbarStyles.button}>Home</Button>
        <Button color="inherit" sx={navbarStyles.button}>Products</Button>
        <Button color="inherit" sx={navbarStyles.button}>Contact</Button>

        {/* Basket & Login */}
        <Box sx={navbarStyles.rightSection}>
          <Typography variant="body1" sx={navbarStyles.text}>Basket</Typography>
          <Typography variant="body1" sx={navbarStyles.text}>Login</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
