import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import navbarStyles from "../../styles/navbarstyles/navbar.styles";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={navbarStyles.appBar}>
      <Toolbar sx={navbarStyles.toolbar}>
        {/* Store Name */}
        <Typography variant="h6" sx={navbarStyles.title}>
          My Store
        </Typography>

        {/* Navigation Buttons */}
        <Box sx={navbarStyles.navLinks}>
          <Link to="/">
            <Button color="inherit" sx={navbarStyles.button}>
              Home
            </Button>
          </Link>
          
          <Link to="/">
            <Button color="inherit" sx={navbarStyles.button}>
              Basket
            </Button>
          </Link>
          <Link to="/">
            <Button color="inherit" sx={navbarStyles.button}>
              Checkout
            </Button>
          </Link>
          <Link to="/">
            <Button color="inherit" sx={navbarStyles.button}>
              Login
            </Button>
          </Link>
        </Box>

        {/* Basket & Login */}
       
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
