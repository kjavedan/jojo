import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { language } from "../../data/language";
import { LanguageContext } from "../../context/LanguageContext";

const RecentBlogs = () => {
  //CONTEXT
  const { curLan } = useContext(LanguageContext);

  return (
    <StyledWrapper>
      <Typography variant="h6">{language[curLan].recentBlogs}</Typography>
      <StyledBlogsWrapper>
        <StyledLink to={"/posts/first-day-in-the-gym"}>
          <Typography variant="subtitle2">
            {language[curLan].firstDayInTheGym}
          </Typography>
        </StyledLink>
        <StyledLink
          to={"/posts/first-workout-plan"}
          style={{ marginTop: "8px" }}
        >
          <Typography variant="subtitle2">
            {language[curLan].firstWorkoutPlan}
          </Typography>
        </StyledLink>
      </StyledBlogsWrapper>
    </StyledWrapper>
  );
};

export default RecentBlogs;

const StyledWrapper = styled(Box)(({ theme }) => ({
  // border: "solid 2px yellow",
  marginTop: 40,
}));

const StyledBlogsWrapper = styled(Stack)(({ theme }) => ({
  marginTop: 8,
  // border: "solid 2px blue",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  textDecorationColor: theme.palette.grey[600],
}));
