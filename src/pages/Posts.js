import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/posts/Header";
import Post from "../blogs/Post";
import Post2 from "../blogs/Post2";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Nutrition from "../blogs/Nutration";

const Posts = () => {
  //NAVIGATION
  const { id } = useParams();
  console.log(id);
  //STATES
  const [selectePost, setSelectedPost] = useState("");

  //USEEFECTS
  useEffect(() => {
    if (id === "first-day-in-the-gym") {
      setSelectedPost(1);
    } else if (id === "first-workout-plan") {
      setSelectedPost(2);
    } else {
      setSelectedPost(3);
    }
  }, []);

  return (
    <div>
      <Header
        postTitle={
          selectePost === 1
            ? "firstDayInTheGym"
            : selectePost === 2
            ? "firstWorkoutPlan"
            : "nutrition"
        }
      />
      <StyledWrapper>
        {selectePost === 1 ? (
          <Post />
        ) : selectePost === 2 ? (
          <Post2 />
        ) : (
          <Nutrition />
        )}
      </StyledWrapper>
    </div>
  );
};

export default Posts;

const StyledWrapper = styled(Box)(({ theme }) => ({
  marginTop: 60,
}));
