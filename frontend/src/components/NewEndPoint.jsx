import { Autocomplete, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function NewEndPoint() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm ? (
        <Stack gap={3} mt={2}>
          <Stack direction={"row"} gap={2}>
            <Button variant="contained">Method</Button>
            <Autocomplete
              fullWidth
              disablePortal
              options={["GET", "POST", "DELETE"]}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>

          <Stack direction={"row"} gap={2}>
            <Button variant="contained">Endpoint</Button>
            <TextField
              fullWidth
              placeholder="Write the API Endpoint e.g., /home"
            />
          </Stack>

          <Stack direction={"row"} gap={2}>
            <Stack gap={2} flexGrow={1}>
              <Stack direction={"row"} gap={2}>
                <Button variant="contained" color="success">
                  Success
                </Button>
                <TextField label="Status Code" placeholder="200" />
              </Stack>
              <TextField
                minRows={10}
                multiline
                placeholder="Enter the success response here"
              />
            </Stack>

            <Stack gap={2} flexGrow={1}>
              <Stack direction={"row"} gap={2}>
                <Button variant="contained" color="error">
                  Error
                </Button>
                <TextField label="Status Code" placeholder="400" />
              </Stack>
              <TextField
                minRows={10}
                multiline
                placeholder="Enter the error response here"
              />
            </Stack>
          </Stack>

          <Stack m={2} direction={"row"} justifyContent={"end"} gap={2}>
            <Button onClick={()=>setShowForm(false)}  variant="contained" color="secondary">
              Cancel Endpoint
            </Button>
            <Button variant="contained" color="secondary">
              Reset
            </Button>
            <Button variant="contained" color="success">
              Start Listening
            </Button>
          </Stack>
        </Stack>
      ) : (
        <Button variant="outlined" onClick={()=>setShowForm(true)} >Create a New Endpoint ?</Button>
      )}
    </>
  );
}
