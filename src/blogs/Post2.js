import React, { useContext, useState } from "react";
import ReactPlayer from "react-player";
import { StyledPost, StyledStack } from "./Post";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { language } from "../data/language";
import { LanguageContext } from "../context/LanguageContext";
import { ArrowDown2 } from "iconsax-react";
import styled from "@emotion/styled";
import image1 from "../assets/gif/dead.gif";
import { post2data } from "../data/post2Data";

const Post2 = () => {
  //CONTEXT
  const { curLan } = useContext(LanguageContext);
  //STATES
  const [isLoaded, setIsLoaded] = useState(false);

  //FUNCS
  const handleVideoReady = () => {
    setIsLoaded(true);
  };

  //JSX
  const workouPlanElements = post2data.map((item, index) => (
    <StyledAccordion>
      <AccordionSummary
        expandIcon={<ArrowDown2 variant="Broken" />}
        sx={{ padding: 0 }}
      >
        <Typography variant="subtitle1">
          {language[curLan][item.dayTitle]}
        </Typography>
      </AccordionSummary>
      {item.children.map((workout, index) => (
        <AccordionDetails>
          <Stack mb={2}>
            <Typography variant="subtitle2">
              {index + 1}. {language[curLan][workout.title]}
            </Typography>
            <img
              style={{ borderRadius: 8, marginTop: "5px" }}
              src={workout.image}
              alt="sni"
            />
          </Stack>
        </AccordionDetails>
      ))}
    </StyledAccordion>
  ));

  return (
    <StyledPost>
      <Stack>
        <span style={{ fontSize: "40px" }}>🏋️</span>
        <Typography variant="h2">
          {language[curLan].firstWorkoutPlan}
        </Typography>
        <Typography variant="caption">
          {language[curLan].writer}: khaled
        </Typography>
        <Typography variant="caption">
          {language[curLan].readingTime}: 3 min
        </Typography>
      </Stack>
      <StyledStack>
        {!isLoaded && (
          <Skeleton
            sx={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        )}
        <ReactPlayer
          controls
          url="https://youtu.be/VOXOcMHAT6k"
          width="100%"
          onReady={handleVideoReady}
        />
      </StyledStack>
      <Stack mt={3}>
        <Typography variant="h4">{language[curLan].workoutPlan}</Typography>
        {workouPlanElements}
      </Stack>
    </StyledPost>
  );
};

export default Post2;

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  background: "transparent",
  boxShadow: "none",
  borderTop: `solid 2px ${theme.palette.background.paper}`,
  // borderBottom: `solid 2px ${theme.palette.background.paper}`,
}));
