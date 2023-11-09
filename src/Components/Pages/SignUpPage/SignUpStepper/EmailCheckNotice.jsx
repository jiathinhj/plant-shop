import {
  CheckCircle,
  CheckCircleOutline,
  DoneAllRounded,
} from "@mui/icons-material";
import { Paper, Typography } from "@mui/material";
import React from "react";

const EmailCheckNotice = () => {
  return (
    <Paper sx={{ p: 3, textAlign: "center" }} elevation={2}>
      <Typography sx={{ py: 1 }} component={"h5"} variant="h5">
        Nice!
      </Typography>{" "}
      <CheckCircleOutline color="success" fontSize="large" />
      <Typography sx={{ py: 1 }}>
        Please check your mailbox to confirm your account to start shopping.
      </Typography>
    </Paper>
  );
};

export default EmailCheckNotice;
