import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import EmailCheckForm from "./SignUpStepper/EmailCheckForm";
import SignUpForm from "./SignUpStepper/SignUpForm";
import EmailCheckNotic from "./SignUpStepper/EmailCheckNotice";
import { Avatar, Container, CssBaseline } from "@mui/material";

const STEPS = [
  { label: "Check your email", content: <EmailCheckForm /> },
  { label: "Fill in your information", content: <SignUpForm /> },
  { label: "Check your mail box", content: <EmailCheckNotic /> },
];

const SingUpPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = () => {
    window.location.replace(`https://mail.google.com/mail/u/0/#inbox`);
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          width: "80%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar src={process.env.PUBLIC_URL + "/logo.png"} />
          <Typography component="h5" variant="h5">
            Sign up
          </Typography>
        </Box>
        <Box sx={{ mt: 4, height: "60vh" }}>
          <Stepper activeStep={activeStep}>
            {STEPS.map(({ label }) => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              <Button
                onClick={
                  activeStep === STEPS.length - 1 ? handleFinish : handleNext
                }
              >
                {activeStep === STEPS.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </>
          {
            <Box sx={{ width: "60%", mx: "auto", mt: 2 }}>
              {STEPS[activeStep].content}
            </Box>
          }
        </Box>
      </Box>
    </Container>
  );
};

export default SingUpPage;
