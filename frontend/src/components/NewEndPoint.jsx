import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import {
  Stack,
  Button,
  Autocomplete,
  TextField,
} from "@mui/material";

export default function NewEndPoint() {
  const { register, control, reset, handleSubmit } = useForm();
  const [showForm, setShowForm] = useState(false);

  const handleStartListening = (data) => console.log(data);

  const handleReset = () => {
    reset({
      endpoint: "",
      errorResponse: "",
      errorStatus: "",
      method: "",
      successResponse: "",
      successStatus: ""
    });
  };

  const handleFormError = (data) => {
    alert("An error occurred");
    console.log(data);
  };

  return (
    <>
      {showForm ? (
        <Stack gap={3} mt={2}>
          <Stack direction={"row"} gap={2}>
            <Button variant="contained">Method</Button>
            <Controller
              name="method"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  fullWidth
                  disablePortal
                  options={["GET", "POST", "DELETE"]}
                  onChange={(_, newValue) => field.onChange(newValue)}
                  renderInput={(params) => (
                    <TextField {...params} required />
                  )}
                />
              )}
            />
          </Stack>

          {/* Endpoint */}
          <Stack direction={"row"} gap={2}>
            <Button variant="contained">Endpoint</Button>
            <TextField
              fullWidth
              placeholder="Write the API Endpoint e.g., /home"
              {...register("endpoint", { required: true })}
            />
          </Stack>

          {/* Success and Error Responses */}
          <Stack direction={"row"} gap={2}>
            <Stack gap={2} flexGrow={1}>
              <Stack direction={"row"} gap={2}>
                <Button variant="contained" color="success">
                  Success
                </Button>
                <TextField
                  type="number"
                  label="Status Code"
                  placeholder="200"
                  {...register("successStatus", { required: true })}
                />
              </Stack>
              <TextField
                minRows={10}
                multiline
                placeholder="Enter the success response here"
                {...register("successResponse", { required: true })}
              />
            </Stack>

            <Stack gap={2} flexGrow={1}>
              <Stack direction={"row"} gap={2}>
                <Button variant="contained" color="error">
                  Error
                </Button>
                <TextField
                  label="Status Code"
                  placeholder="400"
                  {...register("errorStatus", { required: true })}
                />
              </Stack>
              <TextField
                minRows={10}
                multiline
                placeholder="Enter the error response here"
                {...register("errorResponse", { required: true })}
              />
            </Stack>
          </Stack>

          {/* Action Buttons */}
          <Stack m={2} direction={"row"} justifyContent={"end"} gap={2}>
            <Button
              onClick={() => setShowForm(false)}
              variant="contained"
              color="secondary"
            >
              Cancel Endpoint
            </Button>
            <Button onClick={handleReset} variant="contained" color="secondary">
              Reset
            </Button>
            <Button
              onClick={handleSubmit(handleStartListening, handleFormError)}
              variant="contained"
              color="success"
            >
              Start Listening
            </Button>
          </Stack>
        </Stack>
      ) : (
        <Button variant="outlined" onClick={() => setShowForm(true)}>
          Create a New Endpoint ?
        </Button>
      )}
    </>
  );
}
