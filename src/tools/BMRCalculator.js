import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Stack,
  Grid,
  TextField,
  FormHelperText,
  Paper,
  Card,
} from "@mui/material";
import Header from "../components/posts/Header";
import { LanguageContext } from "../context/LanguageContext";
import { language } from "../data/language";
import { Unlimited } from "iconsax-react";

const BMRCalculator = () => {
  //CONTEXT
  const { curLan } = useContext(LanguageContext);

  //STATES
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [age, setAge] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [bmr, setBMR] = useState(null);
  const [genderError, setGenderError] = useState(false);
  const [weightError, setWeightError] = useState(false);
  const [heightError, setHeightError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [activityLevelError, setActivityLevelError] = useState(false);

  //FUNCS
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleWeightUnitChange = (event) => {
    setWeightUnit(event.target.value);

    // Convert weight to selected unit
    if (event.target.value === "lb") {
      setWeight((parseFloat(weight) * 2.20462).toFixed(2));
    } else {
      setWeight((parseFloat(weight) / 2.20462).toFixed(2));
    }
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleHeightUnitChange = (event) => {
    setHeightUnit(event.target.value);

    // Convert height to selected unit
    if (event.target.value === "feet") {
      setHeight((parseFloat(height) * 30.48).toFixed(2));
    } else {
      setHeight((parseFloat(height) / 30.48).toFixed(2));
    }
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleActivityLevelChange = (event) => {
    setActivityLevel(event.target.value);
  };

  const calculateBMR = () => {
    setGenderError(false);
    setWeightError(false);
    setHeightError(false);
    setAgeError(false);
    setActivityLevelError(false);

    if (!gender) {
      setGenderError(true);
    }
    if (!weight) {
      setWeightError(true);
    }

    if (!height) {
      setHeightError(true);
    }

    if (!age) {
      setAgeError(true);
    }

    if (!activityLevel) {
      setActivityLevelError(true);
    }

    if (weight && height && age && gender && activityLevel) {
      const weightInKg = parseFloat(weight);
      const heightInCm = parseFloat(height);
      const ageInYears = parseFloat(age);

      let bmrValue;
      if (gender === "male") {
        bmrValue = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears + 5;
      } else {
        bmrValue = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears - 161;
      }

      // Adjust BMR based on activity level
      switch (activityLevel) {
        case "BMR":
          bmrValue *= 1;
          break;
        case "sedentary":
          bmrValue *= 1.2;
          break;
        case "lightlyActive":
          bmrValue *= 1.375;
          break;
        case "moderatelyActive":
          bmrValue *= 1.55;
          break;
        case "veryActive":
          bmrValue *= 1.725;
          break;
        default:
          break;
      }

      setBMR(bmrValue.toFixed(2));
    } else {
      setBMR(null);
    }
  };

  return (
    <StyledWrapper>
      <Header postTitle={"BMRCalculator"} />
      <Typography variant="h2">{language[curLan].BMRCalculator}</Typography>
      <Grid container mt={2} rowGap={2}>
        <StyledGrid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="gender-label">{language[curLan].gender}</InputLabel>
            <StyledSelect
              error={genderError}
              label={language[curLan].gender}
              id="gender-select"
              value={gender}
              onChange={handleGenderChange}
            >
              <MenuItem value="male">{language[curLan].male}</MenuItem>
              <MenuItem value="female">{language[curLan].female}</MenuItem>
            </StyledSelect>
            {genderError && (
              <FormHelperText>{language[curLan].requiredField}</FormHelperText>
            )}
          </FormControl>
        </StyledGrid>
        <StyledGrid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="weight-unit-label">
              {language[curLan].weightUnit}
            </InputLabel>
            <StyledSelect
              required
              label={language[curLan].weightUnit}
              value={weightUnit}
              onChange={handleWeightUnitChange}
            >
              <MenuItem value="kg">{language[curLan].kg}</MenuItem>
              <MenuItem value="lb">{language[curLan].lb}</MenuItem>
            </StyledSelect>
          </FormControl>
        </StyledGrid>
        <StyledGrid item xs={9}>
          <FormControl fullWidth>
            <StyledInput
              error={weightError}
              required
              type="number"
              label={language[curLan].weight}
              value={weight}
              onChange={handleWeightChange}
            />
            {weightError && (
              <FormHelperText>{language[curLan].requiredField}</FormHelperText>
            )}
          </FormControl>
        </StyledGrid>
        <StyledGrid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="height-unit-label">
              {language[curLan].heightUnit}
            </InputLabel>
            <StyledSelect
              required
              label={language[curLan].heightUnit}
              value={heightUnit}
              onChange={handleHeightUnitChange}
            >
              <MenuItem value="cm">{language[curLan].cm}</MenuItem>
              <MenuItem value="feet">{language[curLan].feet}</MenuItem>
            </StyledSelect>
          </FormControl>
        </StyledGrid>
        <StyledGrid item xs={9}>
          <FormControl fullWidth>
            <StyledInput
              error={heightError}
              required
              type="number"
              label={language[curLan].height}
              value={height}
              onChange={handleHeightChange}
            />
            {heightError && (
              <FormHelperText>{language[curLan].requiredField}</FormHelperText>
            )}
          </FormControl>
        </StyledGrid>
        <StyledGrid item xs={12}>
          <FormControl fullWidth>
            <StyledInput
              error={ageError}
              required
              label={language[curLan].age}
              type="number"
              value={age}
              onChange={handleAgeChange}
            />
            {ageError && (
              <FormHelperText>{language[curLan].requiredField}</FormHelperText>
            )}
          </FormControl>
        </StyledGrid>
        <StyledGrid item xs={12}>
          <FormControl fullWidth error={activityLevelError}>
            <InputLabel id="activity-level-label">
              {language[curLan].activityLevel}
            </InputLabel>
            <StyledSelect
              required
              label={language[curLan].activityLevel}
              value={activityLevel}
              onChange={handleActivityLevelChange}
            >
              <MenuItem value="BMR">{language[curLan].BMR}</MenuItem>
              <MenuItem value="sedentary">
                {language[curLan].sedenatry}
              </MenuItem>
              <MenuItem value="lightlyActive">
                {language[curLan].activeLight}
              </MenuItem>
              <MenuItem value="moderatelyActive">
                {language[curLan].activeModerate}
              </MenuItem>
              <MenuItem value="veryActive">
                {language[curLan].activeHigh}
              </MenuItem>
            </StyledSelect>
            {activityLevelError && (
              <FormHelperText>{language[curLan].requiredField}</FormHelperText>
            )}
          </FormControl>
        </StyledGrid>
      </Grid>

      <Button
        variant="contained"
        size="large"
        sx={{ mt: 3 }}
        onClick={calculateBMR}
      >
        {language[curLan].calculate}
      </Button>
      {bmr && (
        <Stack alignItems={"center"} mt={4}>
          <Typography>{language[curLan].dailyCalories}:</Typography>
          <Typography variant="h3">{bmr}</Typography>
        </Stack>
      )}
    </StyledWrapper>
  );
};

export default BMRCalculator;

const StyledWrapper = styled.div`
  margin-top: 100px;
  height: fit-content;
  position: relative;
`;

const StyledSelect = styled(Select)`
  && {
    width: 100%;
  }
`;

const StyledInput = styled(TextField)(({ theme }) => ({
  direction: "ltr",
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: " 0 2px",
}));
