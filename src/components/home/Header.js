import styled from "@emotion/styled";
import React, { useContext } from "react";
import { Sun1 } from "iconsax-react";
import { Avatar, Box, CardHeader, Typography } from "@mui/material";
import { LanguageContext } from "../../context/LanguageContext";
import { ModeContext } from "../../context/ModeContext";
import LanguageToggler from "../common/LanguageToggler";

const Header = () => {
  //CONTEXT
  const { toggleMode } = useContext(ModeContext);
  const { curLan } = useContext(LanguageContext);

  return (
    <StyledHeader>
      <StyledContent>
        <StyledAccountInfo
          title={"Your FitMentor"}
          avatar={
            <StyledAVatar src="" alt="">
              Y
            </StyledAVatar>
          }
          subheader={
            <Typography variant="caption">example@gmail.com</Typography>
          }
        />

        <StyledMoreBtn>
          <LanguageToggler />
          <ThemeToggler onClick={toggleMode}>
            <Sun1 />
          </ThemeToggler>
        </StyledMoreBtn>
      </StyledContent>
    </StyledHeader>
  );
};

export default Header;

export const StyledHeader = styled("nav")(({ theme }) => ({
  width: "100%",
  height: "70px",
  position: "fixed",
  zIndex: 999,
  top: 0,
  left: 0,
  padding: theme.spacing(0, 3),
  backgroundColor: theme.palette.background.default,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // border: "solid",
  direction: "ltr",
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(0),
    width: "760px",
    left: "unset",
  },
}));

export const StyledContent = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledAccountInfo = styled(CardHeader)(({ theme }) => ({
  // border: "solid",
  paddingLeft: 0,
  "& .MuiCardHeader-avatar": {
    marginRight: "8px",
  },
}));
const StyledAVatar = styled(Avatar)(({ theme }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "4px",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.secondary,
}));

const StyledMoreBtn = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "fit-content",
}));
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
