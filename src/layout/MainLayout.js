import { Outlet } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

export default function MainLayout() {
  return (
    <StyledRoot>
      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
}

// ----------------------------------------------------------------------
const StyledRoot = styled(Box)(({ theme }) => ({
  minHeight: "100%",
  overflow: "hidden",
  // border: "solid 2px red",

  background: theme.palette.background.default,
}));

const Main = styled("div")(({ theme }) => ({
  // border: "solid",
  flexGrow: 1,
  // overflow: "auto",
  minHeight: "99vh",
  position: "relative",
  padding: theme.spacing(0, 3),
  // overflowX: "hidden",
  [theme.breakpoints.up("lg")]: {
    width: "800px",
    margin: "0 auto",
  },
}));
