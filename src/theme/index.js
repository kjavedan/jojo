//REACT
import React, { useContext, useMemo } from "react";
import PropTypes from "prop-types";

//MUI

//CUSTOMS
import { lightPalette, darkPalette } from "./custom/palette";

//CONTEXTS
import { LanguageContext } from "../context/LanguageContext";
import { ModeContext } from "../context/ModeContext";
import CustomGlobalStyles from "./custom/globalStyles";
import {
  StyledEngineProvider,
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import typography from "./custom/typography";
import { language } from "../data/language";

const ThemeProvider = ({ children }) => {
  //Contexts
  const { mode } = useContext(ModeContext);
  const { curLan } = useContext(LanguageContext);

  console.log(mode);
  console.log(curLan);
  // console.log(currentLanguage);

  const themeOptions = useMemo(() => {
    const palette = mode === "light" ? lightPalette : darkPalette;

    console.log(typography(curLan, palette));

    return {
      palette: palette,
      typography: typography(curLan, palette),
    };
  }, [mode, curLan]);

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CustomGlobalStyles curLan={curLan} />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
