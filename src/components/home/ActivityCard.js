import styled from "@emotion/styled";
import { Box, Card, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ModeContext } from "../../context/ModeContext";
import { language } from "../../data/language";

const ActivityCard = ({ curLan, link, cover, icon, title }) => {
  //NAVIGATION
  const navigate = useNavigate();

  //CONTEXT
  const { mode } = useContext(ModeContext);

  return (
    <StyledActivityCard curLan={curLan} onClick={() => navigate(link)}>
      <StyledActivityCardCover bg={cover}></StyledActivityCardCover>
      <StyledActivityCardIcon>
        <Typography fontSize={24}>{icon}</Typography>
      </StyledActivityCardIcon>
      <StyledActivityTitle mode={mode}>
        <Typography
          variant="subtitle1"
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "80%",
          }}
        >
          {language[curLan][title]}
        </Typography>
      </StyledActivityTitle>
    </StyledActivityCard>
  );
};

export default ActivityCard;
const StyledActivityCard = styled(Card)(({ theme, curLan }) => ({
  position: "relative",
  height: 100,
  minWidth: 100,
  maxWidth: 100,
  borderRadius: 8,
  marginRight: curLan === "en" ? 18 : 2,
  marginLeft: curLan === "en" ? 2 : 18,
  cursor: "pointer",
  "&:hover": {
    background: theme.palette.background.neutral,
  },
  [theme.breakpoints.up("lg")]: {
    minWidth: "200px",
  },
}));

const StyledActivityCardCover = styled(Box)(({ theme, bg }) => ({
  height: 50,
  width: "100%",
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  background: bg ? `url${bg}` : theme.palette.grey[900],
}));
const StyledActivityTitle = styled(Box)(({ theme, mode }) => ({
  height: 50,
  width: "100%",
  borderBottomLeftRadius: 8,
  borderBottomRightRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor:
    mode === "light"
      ? theme.palette.background.default
      : theme.palette.background.paper,
}));

const StyledActivityCardIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "30%",
  transform: "translate(-50%, -50%)",
}));
