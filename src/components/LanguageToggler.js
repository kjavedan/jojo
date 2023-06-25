import React, { useContext, useState } from "react";
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
import { LanguageContext } from "../context/LanguageContext";

const LanguageToggler = () => {
  //CONTEXT
  const { selectLanguage } = useContext(LanguageContext);

  //STATES
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelecte = (lang) => {
    selectLanguage(lang);
    handleClose();
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
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ marginLeft: "-5px" }}
      >
        <List>
          <ListItemButton onClick={() => handleLanguageSelecte("en")}>
            <ListItemIcon>
              <img style={styles} src={flagBrititsh} alt="england flag" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2">English</Typography>
            </ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => handleLanguageSelecte("fa")}>
            <ListItemIcon>
              <img style={styles} src={flagIran} alt="england flag" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2">Farsi</Typography>
            </ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => handleLanguageSelecte("ar")}>
            <ListItemIcon>
              <img style={styles} src={flagUae} alt="england flag" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2">Arabic</Typography>
            </ListItemText>
          </ListItemButton>
        </List>
      </Popover>
    </div>
  );
};

export default LanguageToggler;
