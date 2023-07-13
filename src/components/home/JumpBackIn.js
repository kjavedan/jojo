import styled from "@emotion/styled";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import ActivityCard from "./ActivityCard";
import { language } from "../../data/language";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

const JumpBackIn = () => {
  const { curLan } = useContext(LanguageContext);
  const contentRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const contentElement = contentRef.current;

    const handleScroll = () => {
      setScrollLeft(contentElement.scrollLeft);
    };
    contentElement.addEventListener("scroll", handleScroll);
    return () => {
      contentElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollLeftHandler = () => {
    const contentElement = contentRef.current;
    const scrollAmount = contentElement.clientWidth;
    contentElement.scrollTo({
      left: scrollLeft - scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollRightHandler = () => {
    const contentElement = contentRef.current;
    const scrollAmount = contentElement.clientWidth;
    contentElement.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <StyledWrapper>
        <Typography variant="h6">{language[curLan].recent}</Typography>
        <StyledStack ref={contentRef}>
          <ActivityCard
            title={"nutrition"}
            curLan={curLan}
            link={"/posts/nutrition"}
            icon={"🍇"}
          />
          <ActivityCard
            title={"BMRCalculator"}
            curLan={curLan}
            link={"/BMR-calculator"}
            icon={"✖️"}
          />
          <ActivityCard
            title={"firstDayInTheGym"}
            curLan={curLan}
            link={"/posts/first-day-in-the-gym"}
            icon={"1️⃣"}
          />
          <ActivityCard
            title={"firstWorkoutPlan"}
            curLan={curLan}
            link={"/posts/first-workout-plan"}
            icon={"🤸"}
          />
        </StyledStack>

        <PrevButton onClick={scrollLeftHandler}>
          <ArrowLeft2 />
        </PrevButton>

        <NextButton onClick={scrollRightHandler}>
          <ArrowRight2 />
        </NextButton>
      </StyledWrapper>
    </>
  );
};

export default JumpBackIn;

const StyledWrapper = styled(Box)(({ theme }) => ({
  marginTop: 100,
  // border: "solid 2px green",
  height: "fit-content",
  width: "100vw",
  WebkitOverflowScrolling: "touch",
  zIndex: 100,
  [theme.breakpoints.up("lg")]: {
    width: "100%",
  },
  position: "relative",
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  paddingBottom: theme.spacing(1),
  width: "100%",
  display: "flex",
  flexDirection: "row",
  overflowX: "auto", // Enable horizontal scrolling
  overflowY: "hidden", // Hide vertical scrolling
  height: "fit-content",
  marginTop: 5,
  scrollbarWidth: 0,
  "&::-webkit-scrollbar": {
    display: "none", // Hide the scrollbar for Webkit browsers
  },
  "-ms-overflow-style": "none", // Hide the scrollbar for IE and Edge
  scrollbarWidth: "none", // Hide the scrollbar for Firefox
}));

const StyledButton = styled(Box)(({ theme, disabled }) => ({
  position: "absolute",
  width: "50px",
  borderRadius: "100%",
  height: "50px",
  padding: "unset",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    cursor: "pointer",
  },
  top: "40%",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

const NextButton = styled(StyledButton)(({ theme }) => ({
  right: -70,
}));
const PrevButton = styled(StyledButton)(({ theme }) => ({
  left: -70,
}));
