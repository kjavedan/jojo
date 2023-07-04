import styled from "@emotion/styled";
import { Box, Typography, useTheme } from "@mui/material";
import React, { useContext, useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { ArrowDown2, ArrowRight2 } from "iconsax-react";
import { language } from "../../data/language";
import { LanguageContext } from "../../context/LanguageContext";
import { NavLink } from "react-router-dom";

const Categories = ({ items }) => {
  //CONTEXT
  const theme = useTheme();
  const { curLan } = useContext(LanguageContext);

  // STATES
  const [openItems, setOpenItems] = useState([1]);

  // FUNCS
  const handleClick = (index) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  //JSX
  const categorisItems = items.map((item, index) =>
    item.children ? (
      <>
        <StyledListItemButton
          key={item.title}
          onClick={() => handleClick(index)}
        >
          <ListItemIcon>
            <Typography fontSize={24}>{item.icon}</Typography>
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="subtitle1" width={"fit-content"}>
                {language[curLan][item.title]}
              </Typography>
            }
          />
          {openItems[index] ? (
            <ArrowDown2 size={"24"} color="#5A3F96" variant="Broken" />
          ) : (
            <ArrowRight2
              style={{
                transform: `rotate(${curLan === "en" ? "0" : "180deg"})`,
              }}
              size={"24"}
              color="#5A3F96"
              variant="Broken"
            />
          )}
        </StyledListItemButton>
        <Collapse in={openItems[index]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.children.map((item, index) => (
              <StyledListItemButton
                component={NavLink}
                to={item.path}
                key={index}
                sx={{ pl: 4 }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1" width={"fit-content"}>
                      {language[curLan][item.title]}
                    </Typography>
                  }
                />
              </StyledListItemButton>
            ))}
          </List>
        </Collapse>
      </>
    ) : (
      <StyledListItemButton>
        <ListItemIcon>
          <Typography fontSize={24}>{item.icon}</Typography>
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="subtitle1">
              {language[curLan][item.title]}
            </Typography>
          }
        />
      </StyledListItemButton>
    )
  );

  return (
    <StyledWrapper>
      <Typography variant="h6">{language[curLan].categories}</Typography>
      <List
        disablePadding
        sx={{ borderBottom: `solid 2px ${theme.palette.background.paper}` }}
      >
        {categorisItems}
      </List>
    </StyledWrapper>
  );
};

export default Categories;

const StyledWrapper = styled(Box)(({ theme }) => ({
  // border: "solid 2px brown",
  marginTop: 40,
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  borderTop: `solid 2px ${theme.palette.background.paper}`,
}));
