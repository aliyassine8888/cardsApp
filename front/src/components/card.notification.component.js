/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import PropTypes from 'prop-types';

const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

export default function CustomizedSnackbars({ severity, message, notificationCallback }) {
  const [open, setOpen] = React.useState(true);
  React.useEffect(() => {
    if (open === false) {
      notificationCallback();
    }
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    notificationCallback();
    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

CustomizedSnackbars.propTypes = {
  severity: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  notificationCallback: PropTypes.func.isRequired,

};
