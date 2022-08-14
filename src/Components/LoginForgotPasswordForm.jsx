import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../Pages/Form.css";
import { Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Roboto",
      color: "#1f4583",
      fontSize: "16px",
    },
  },
});

export default function LoginForgotPasswordForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button
          variant="outlined"
          disableRipple
          onClick={handleClickOpen}
          className="forget-pass"
          style={{ textTransform: "none" }}
        >
          <Typography>Forgot your password?</Typography>
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Reset Password</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To reset your password, please enter your email address here. We
              will send you a reset link to the provided email.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="password-reset-email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} style={{ fontSize: "14px" }}>
              Cancel
            </Button>
            <Button onClick={handleClose} style={{ fontSize: "14px" }}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
