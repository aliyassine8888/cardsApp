import React, { useState } from "react";
import {
  Button,
  FormGroup,
  FormLabel,
  TextField,
} from "@mui/material";
import Box from '@mui/material/Box';



export default function FormSubmitHooks() {
  const [formValues, setFormValues] = useState({});
  
  const handleTextFieldChange = (
    event
  ) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };


  const handleSubmit = () => {
    fetch('/somewhere.html', {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }

  return (

    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '50ch' },
    }}
    noValidate
    autoComplete="off"
  >
        <FormLabel component="legend">Card Details</FormLabel>
      <FormGroup
        sx={{
          padding: 2,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "primary.main",
        }}
      >
        <TextField
          sx={{ paddingBottom: 2 }}
          name="name"
          variant="outlined"
          placeholder="CardHolder Name..."
          onChange={handleTextFieldChange}
        />
        <TextField
          sx={{ paddingBottom: 2 }}
          name="pan"
          variant="outlined"
          placeholder="Primary Account Number..."
          onChange={handleTextFieldChange}
        />
        <TextField
          sx={{ paddingBottom: 2 }}
          name="limit"
          variant="outlined"
          placeholder="Limit"
          onChange={handleTextFieldChange}
        />
        

        <Button variant="outlined" onClick={handleSubmit}>Save</Button>
      </FormGroup>
    </Box>
  );
}