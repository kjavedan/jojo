import React, { useState } from "react";
import { ThemeToggler as StyledLanguageToggler } from "../layout/Header";
import { Flag } from "iconsax-react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import flagBrititsh from "../images/flagBritish.png";
import flagIran from "../images/flagIran.png";
import flagUae from "../images/flagUae.png";

const LanguageToggler = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const styles = {
    width: "30px",
    height: "20px",
    borderRadius: "2px",
  };

  return (
    <div>
      <StyledLanguageToggler onClick={handleClick}>
        <Flag />
      </StyledLanguageToggler>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <img style={styles} src={flagBrititsh} alt="england flag" />
            </ListItemIcon>
            <ListItemText>English</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <img style={styles} src={flagIran} alt="england flag" />
            </ListItemIcon>
            <ListItemText>Farsi</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <img style={styles} src={flagUae} alt="england flag" />
            </ListItemIcon>
            <ListItemText>Arabic</ListItemText>
          </ListItemButton>
        </List>
      </Popover>
    </div>
  );
};

export default LanguageToggler;
