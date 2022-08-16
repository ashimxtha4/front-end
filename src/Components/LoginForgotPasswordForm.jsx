import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);
  const [emailData, setEmailData] = useState("");
  const [isFormInvalid, setIsFormInvalid] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsFormInvalid(false);
    setEmailData("");
  };

  const handleResetSubmit = () => {
    console.log(emailData);
    handleEmptyError();
  };

  const handleEmptyError = () => {
    if (emailData === "") {
      setIsFormInvalid(true);
    } else {
      setIsFormInvalid(false);
    }
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
              name="password-reset-email"
              id="password-reset-email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              required
              onChange={(e) => {
                setEmailData(e.target.value);
                console.log(emailData, "from input onchange");
                setIsFormInvalid(false);
              }}
              error={isFormInvalid}
              helperText={isFormInvalid && "Can not be empty"}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              style={{ fontSize: "14px" }}
              type="reset"
            >
              Cancel
            </Button>
            <Button onClick={handleResetSubmit} style={{ fontSize: "14px" }}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
