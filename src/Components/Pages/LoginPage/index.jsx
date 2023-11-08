import { Google, LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";

const CusTomLink = styled(Link)(({ theme }) => ({
  textDecoration: "underline",
  color: grey[700],
  fontStyle: "inherit",
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

const LoginPage = () => {
  // const url = `http://localhost:2708/auth/google`;
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar src={process.env.PUBLIC_URL + "/logo.png"} />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <Button type="submit" variant="contained" fullWidth>
            Sign In
          </Button>
          <Button
            variant="contained"
            fullWidth
            startIcon={<Google />}
            onClick={() => window.location.href("url")}
            sx={{ backgroundColor: red[600], my: 2 }}
          >
            Login with Google
          </Button>

          <Grid container>
            <Grid item xs>
              <CusTomLink href="#" variant="body2">
                Forgot password?
              </CusTomLink>
            </Grid>
            <Grid item>
              <CusTomLink href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </CusTomLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
