import React, { useEffect, useState } from "react";
import { CallLoadEndpoints } from "../../wailsjs/go/main/App";
import { Button, IconButton, List, ListItem, Paper, Stack, Tooltip, Typography } from "@mui/material";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import NewEndPoint from "./NewEndPoint";

export default function ListOfEndpoints({refreshList,setRefreshList}) {
  const [listOfEndpoints, setListOfEndpoints] = useState([]);
  const [showExpand, setShowExpand] = useState(false);
	const [expandedIndex,setExpandedIndex]=useState(-1)


	const handleExpand=(index)=>{
    setExpandedIndex(index)
		setShowExpand((curr)=>{!curr})
	}

  useEffect(() => {
    CallLoadEndpoints()
      .then((res) => {
        if (res && Array.isArray(res.listOfEndpoints)) {
          setListOfEndpoints(res.listOfEndpoints);
        } else {
          setListOfEndpoints([]);
        }
      })
      .catch((err) => {
        console.error("Failed to load endpoints:", err);
        setListOfEndpoints([]);
      });
  }, [refreshList]);

  return (
    <>
      {listOfEndpoints.length === 0 ? (
        <Typography variant="h6">no items</Typography>
      ) : (
      <List
        sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // centers ListItem horizontally
        width: "100%",
      }}
      >
{listOfEndpoints.map((item, index) => (
  <ListItem
    key={index}
    sx={{ justifyContent: "center", width: "100%" }}
  >
    <Paper sx={{ width: "70%", p: 2 }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Button disableRipple disableElevation variant="contained">
          {item.method}
        </Button>

        <Stack flexGrow={1}>
          <Button disableRipple disableElevation variant="outlined">
            {item.path}
          </Button>
        </Stack>

        <IconButton
          onClick={() =>
            setExpandedIndex(prev => (prev === index ? null : index))
          }
        >
          <Tooltip title="Expand">
            <ExpandCircleDownIcon />
          </Tooltip>
        </IconButton>
      </Stack>

      {expandedIndex === index && (
        <NewEndPoint type="loadPrev" data={item} setRefreshList={setRefreshList} />
      )}
    </Paper>
  </ListItem>
))}
</List>
      )}
    </>
  );
}
