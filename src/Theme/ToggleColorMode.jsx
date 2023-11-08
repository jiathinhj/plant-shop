import { useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green, grey } from "@mui/material/colors";
import React from "react";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const ToggleColorMode = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main: "#2F7751",
                },
                secondary: { main: "#f8bbd0" },
                divider: grey[200],
                text: {
                  primary: grey[900],
                  secondary: grey[700],
                },
              }
            : {
                primary: {
                  main: "#2F7751",
                },
                secondary: { main: "#b2a852" },
                divider: grey[800],
                text: {
                  primary: grey[200],
                  secondary: grey[400],
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;
