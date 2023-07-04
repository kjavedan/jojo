import React from "react";
import Header from "../components/home/Header";
import JumpBackIn from "../components/home/JumpBackIn";
import Categories from "../components/home/Categories";
import RecentBlogs from "../components/home/RecentBlogs";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { categorisItemsData } from "../data/homeData";

const Home = () => {
  return (
    <HomeLayout>
      <Header />
      <JumpBackIn />
      <Categories items={categorisItemsData} />
      <RecentBlogs />
    </HomeLayout>
  );
};

export default Home;

const HomeLayout = styled(Box)(({ theme }) => ({
  marginTop: 60,
  // border: "solid 2px red",
  minHeight: "100vh",
}));
