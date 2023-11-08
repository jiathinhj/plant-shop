import { Link, Toolbar } from "@mui/material";
import React from "react";
import { SECTIONS } from "../../Constants/Menu";

const MainMenu = () => {
  return (
    <Toolbar
      component="nav"
      variant="dense"
      sx={{
        justifyContent: "space-between",
        overflowX: "auto",
        maxWidth: "lg",
        marginX: "auto",
      }}
    >
      {SECTIONS.map((section) => (
        <Link
          key={`menu-item-${section}`}
          color="inherit"
          // nowrap="true"
          variant="body2"
          href={section.url}
          sx={{
            p: 1,
            flexShrink: 0,
            textDecoration: "none",
            marginX: "auto",
          }}
        >
          {section}
        </Link>
      ))}
    </Toolbar>
  );
};

export default MainMenu;
