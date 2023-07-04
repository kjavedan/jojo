import styled from "@emotion/styled";
import { Skeleton, Stack, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { language } from "../data/language";
import { LanguageContext } from "../context/LanguageContext";
import ReactPlayer from "react-player";

const Post = () => {
  //CONTEXT
  const { curLan } = useContext(LanguageContext);

  //STATES
  const [isLoaded, setIsLoaded] = useState(false);

  //FUNCS
  const handleVideoReady = () => {
    setIsLoaded(true);
  };
  return (
    <StyledPost>
      <Stack>
        <span style={{ fontSize: "40px" }}>🏋️</span>
        <Typography variant="h2">{language[curLan].postTitle}</Typography>
        <Typography variant="caption">
          {language[curLan].writer}: khaled
        </Typography>
        <Typography variant="caption">
          {language[curLan].readingTime}: 1 min
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
      <Stack mt={5}>
        <Typography variant="h3">{language[curLan].introTitle}:</Typography>
        <Typography variant="body1">{language[curLan].introBody}</Typography>
      </Stack>
      <Stack mt={5}>
        <Typography variant="h3">{language[curLan].mainTitle}:</Typography>
        <Typography variant="body1">{language[curLan].mainBody}</Typography>
      </Stack>
      <Stack mt={5}>
        <Typography variant="h3">{language[curLan].concTitle}</Typography>
        <Typography variant="body1">{language[curLan].concBody}</Typography>
      </Stack>
      <Stack mt={2}>
        <Typography variant="h6">{language[curLan].peace}</Typography>
      </Stack>
    </StyledPost>
  );
};

export default Post;

export const StyledPost = styled.div`
  width: 100%;
  height: fit-content;
  padding-bottom: 10rem;
`;

export const StyledStack = styled(Stack)(({ theme }) => ({
  position: "relative",
  height: 200,
  borderRadius: "12px",
  overflow: "hidden",
  marginTop: "20px",
  [theme.breakpoints.up("sm")]: {
    height: "fit-content",
  },
}));
