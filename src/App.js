import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ModeContextProvider } from "./context/ModeContext";
import ThemeProvider from "./theme";
import { LanguageContextProvider } from "./context/LanguageContext";

const App = () => {
  return (
    <HelmetProvider>
      <ModeContextProvider>
        <LanguageContextProvider>
          <ThemeProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </LanguageContextProvider>
      </ModeContextProvider>
    </HelmetProvider>
  );
};

export default App;
