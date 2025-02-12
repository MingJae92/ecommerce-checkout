const navbarStyles = {
    appBar: {
      width: "100%",
      top: 0,
      left: 0,
      backgroundColor: "#333",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1200px",
      margin: "0 auto",
      width: "100%",
    },
    title: {
      flexGrow: 1,
      fontWeight: "bold",
      fontSize: "1.5rem",
    },
    navLinks: {
      display: "flex",
      gap: "20px",
    },
    button: {
      fontSize: "1rem",
      textTransform: "none",
    },
    rightSection: {
      display: "flex",
      gap: "20px",
    },
    text: {
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  };
  
  export default navbarStyles;
  