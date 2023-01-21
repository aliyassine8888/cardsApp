import React, { useState } from "react";
import {
  Button,
  FormGroup,
  FormLabel,
  TextField,
} from "@mui/material";
import Box from '@mui/material/Box';



export default function FormSubmitHooks({ addCard }) {
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


  const handleSubmit = (event) => {
    event.preventDefault();
    addCard(formValues);
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
      <FormLabel component="legend" sx={{
        fontSize: '1.6em',
      }}>Credit Card System</FormLabel>
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
          placeholder="Card-Holder Name..."
          onChange={handleTextFieldChange}
          inputProps={{ maxLength: 20 }}
          error={formValues["name"] && formValues["name"]!== "" && !formValues["name"].match("^[a-zA-Z ]*$")}
          helperText = {formValues["name"] && formValues["name"]!== "" && !formValues["name"].match("^[a-zA-Z ]*$")?'The only special character allowed is space, up to 20 characters':''}
        />
        <TextField
          sx={{ paddingBottom: 2 }}
          name="pan"
          type="number"
          variant="outlined"
          placeholder="Primary Account Number..."
          onChange={handleTextFieldChange}
          error={formValues["pan"] && formValues["pan"].length>19}
          helperText = {formValues["pan"] && formValues["pan"].length>19?'Credit card numbers may vary in length, up to 19 characters':''}
        />
        <TextField
          sx={{ paddingBottom: 2 }}
          name="limit"
          type="number"
          variant="outlined"
          placeholder="Limit"
          onChange={handleTextFieldChange}
        />


        <Button variant="outlined" type="submit" onClick={handleSubmit} disabled={!formValues["name"] || !formValues["pan"] || !formValues["limit"]}>Save</Button>
      </FormGroup>
    </Box>
  );
}