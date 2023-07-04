import styled from "@emotion/styled";
import { Box, Card, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import ActivityCard from "./ActivityCard";
import { language } from "../../data/language";

const JumpBackIn = () => {
  const { curLan } = useContext(LanguageContext);

  return (
    <StyledWrapper>
      <Typography variant="h6">{language[curLan].recent}</Typography>
      <StyledStack>
        <ActivityCard
          title={"firstDayInTheGym"}
          curLan={curLan}
          link={"first-day-in-the-gym"}
          icon={"1️⃣"}
        />
        <ActivityCard
          title={"firstWorkoutPlan"}
          curLan={curLan}
          link={"first-workout-plan"}
          icon={"🤸"}
        />
      </StyledStack>
    </StyledWrapper>
  );
};

export default JumpBackIn;

const StyledWrapper = styled(Box)(({ theme }) => ({
  marginTop: 100,
  // border: "solid 2px green",
  height: "fit-content",
  position: "relative",
}));
const StyledStack = styled(Stack)(({ theme }) => ({
  paddingBottom: theme.spacing(1),
  // border: "solid",
  width: "100vw",
  display: "flex",
  flexDirection: "row",

  overflowX: "scroll",
  height: "fit-content",
  marginTop: 5,
  scrollbarWidth: 0,
  "&::-webkit-scrollbar": {
    display: "none", // Hide the scrollbar for Webkit browsers
  },
  "-ms-overflow-style": "none", // Hide the scrollbar for IE and Edge
  scrollbarWidth: "none", // Hide the scrollbar for Firefox
}));
