import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { language } from "../data/language";
import { LanguageContext } from "../context/LanguageContext";

const Post = () => {
  //CONTEXT
  const { curLan } = useContext(LanguageContext);

  // title: 'First day in the gym'
  // writer: 'writer'
  // readingTime: 'reading time'
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
    </StyledPost>
  );
};

export default Post;

const StyledPost = styled.div`
  width: 100%;
  height: fit-content;
  padding-bottom: 10rem;
`;
