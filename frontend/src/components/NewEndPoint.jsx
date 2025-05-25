//wails fn
import { CallCreateNewEndpoint } from "../../wailsjs/go/main/App";

//mui stuffs
import {
  Stack,
  Button,
  Autocomplete,
  TextField,
} from "@mui/material";

//utils
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function NewEndPoint({type="new",data={}}) {
  const { register, control, reset, handleSubmit } = useForm();
  const [showForm, setShowForm] = useState(false);

  const handleStartListening =async(data) => {
    const res= await CallCreateNewEndpoint(data)
		console.log(res)
		handleReset()
	};

  const handleReset = () => {
    reset({
      path: "",
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

	useEffect(()=>{
    if(type==="loadPrev"){
    reset({
      path: data.path,
      errorResponse: data.errorResponse,
      errorStatus: data.errorStatus,
      method: data.method,
      successResponse: data.successResponse,
      successStatus: data.successStatus
    });
			setShowForm(true)
		}
	},[])

  return (
    <>
      {showForm ? (
        <Stack gap={3} mt={2}>
          <Stack direction={"row"} gap={2}>
					  <Button disableRipple disableFocusRipple disableTouchRipple variant="contained">
				      Method
				    </Button>
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
					  <Button disableRipple   disableFocusRipple disableTouchRipple variant="contained">
				    Endpoint</Button>
            <TextField
              fullWidth
              placeholder="Write the API Endpoint e.g., /home"
              {...register("path", { required: true })}
            />
          </Stack>

          {/* Success and Error Responses */}
          <Stack direction={"row"} gap={2}>
            <Stack gap={2} flexGrow={1}>
              <Stack direction={"row"} gap={2}>
					      <Button color="success" disableRipple   disableFocusRipple disableTouchRipple variant="contained">
                  Success
                </Button>
                <TextField
                  type="number"
                  label="Status Code"
                  placeholder="200"
                  {...register("successStatus", { required: true,valueAsNumber:true })}
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
					      <Button color="error" disableRipple disableFocusRipple disableTouchRipple variant="contained">
                  Error
                </Button>
                <TextField
                  label="Status Code"
                  placeholder="400"
                  {...register("errorStatus", { required: true,valueAsNumber: true })}
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
				    {type==="new"&&
            <Button
              onClick={() => setShowForm(false)}
              variant="contained"
              color="secondary"
            >
              Cancel Endpoint
            </Button>
						}
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
