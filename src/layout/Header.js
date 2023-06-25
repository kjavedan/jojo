import styled from "@emotion/styled";
import React, { useContext } from "react";
import LanguageToggler from "../components/LanguageToggler";
import { Sun1 } from "iconsax-react";
import { ModeContext } from "../context/ModeContext";
import { Box } from "@mui/material";
import { LanguageContext } from "../context/LanguageContext";

const Header = () => {
  //CONTEXT
  const { toggleMode } = useContext(ModeContext);
  const { curLan } = useContext(LanguageContext);

  return (
    <StyledHeader>
      <StyledContent>
        <LanguageToggler />
        <ThemeToggler onClick={toggleMode}>
          <Sun1 />
        </ThemeToggler>
      </StyledContent>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled("nav")(({ theme }) => ({
  width: "100%",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledContent = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const ThemeToggler = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "4px",
  backgroundColor: theme.palette.background.paper,
  marginLeft: "20px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.text.secondary,
}));
