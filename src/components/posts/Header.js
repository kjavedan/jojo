import styled from "@emotion/styled";
import React, { useContext } from "react";
import { ArrowLeft3, HambergerMenu } from "iconsax-react";
import { Avatar, Box, CardHeader, Typography } from "@mui/material";
import { LanguageContext } from "../../context/LanguageContext";
import { ModeContext } from "../../context/ModeContext";
import { useNavigate } from "react-router-dom";
import {
  StyledContent,
  StyledHeader as StyledHomeHeader,
} from "../home/Header";
import { language } from "../../data/language";

const Header = ({ postTitle }) => {
  //NAVIGATION
  const navigate = useNavigate();

  //CONTEXT
  const { toggleMode } = useContext(ModeContext);
  const { curLan } = useContext(LanguageContext);

  return (
    <StyledHeader>
      <StyledContent>
        <StyledPageInfo
          onClick={() => navigate(-1)}
          title={
            <Typography variant="subtitle2">
              {language[curLan][postTitle]}
            </Typography>
          }
          avatar={
            <StyledAVatar src="" alt="">
              <ArrowLeft3 variant="Broken" />
            </StyledAVatar>
          }
        />

        {/* <StyledMoreBtn>
          <HambergerMenu />
        </StyledMoreBtn> */}
      </StyledContent>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled(StyledHomeHeader)(({ theme }) => ({
  height: "60px",
}));

const StyledPageInfo = styled(CardHeader)(({ theme }) => ({
  // border: "solid",
  paddingLeft: 0,
  "& .MuiCardHeader-avatar": {
    marginRight: "8px",
  },
}));
const StyledAVatar = styled(Avatar)(({ theme }) => ({
  width: "30px",
  height: "30px",
  background: "transparent",
  color: theme.palette.text.secondary,
}));

const StyledMoreBtn = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.paper,
  height: 30,
  width: 35,
  borderRadius: 4,
  color: theme.palette.text.secondary,
}));
