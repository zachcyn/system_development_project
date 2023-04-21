import {useState} from "react";
import * as Components from "./rounds_components";
import { Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material";
import Icon from "@mui/material/Icon";
import { filetitle } from "../../pages/info_manage";

export default function DeleteRound(props) {
    const [lists, setList] = useState([
      {
        id: 1,
        name: "Chu Yie Nian",
        price: "10",
      },
      {
        id: 2,
        name: "Eddy",
        price: "5",
      },
    ]);
  
    const [updateState, setUpdateState] = useState(-1);
  
    function handleUpdate(e) {
      e.preventDefault();
      setUpdateState(-1);
    }
  
    function handleDelete(id) {
      const newList = lists.filter((li) => li.id !== id);
      setList(newList);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      console.log("Delete confirmed");
      // code to confirm delete here
      props.setTrigger(false);
    }
  
    return props.trigger ? (
      <>
        <Box
        width={"100%"}
        height="100vh"
        sx={{
          align: "center",
          overflow: "auto",
          position: "fixed",
          backgroundColor: "#00000033",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: 0,
          left: 0,
        }}
      >
     
          <Components.Container>
                  <Components.SignInContainer>
                      <Box
                          justifyContent="flex-start"
                          alignItems="flex-start"
                          display={'flex'}
                          sx={{ml:2, mt:1, mb:-5}}
                      >
                          <Icon onClick={() => props.setTrigger(false)} sx={{cursor:'pointer'}}>close</Icon>
                      </Box>
                          <Components.Form
                              onSubmit={handleSubmit}
                          >
  
                          <Box sx={{ height: 400, width: '100%' }}>
                          <form onSubmit={handleUpdate}>
                              <TableContainer>
                              <Table>
                                  <TableHead>
                                  <TableRow>
                                      <TableCell>Round</TableCell>
                                      <TableCell>Player 1</TableCell>
                                      <TableCell>Player 2</TableCell>
                                      <TableCell>Score</TableCell>
                                  </TableRow>
                                  </TableHead>
                                  <TableBody>
                                  {lists.map((current) =>
                                      updateState === current.id ? (
                                      <TableRow key={current.id}>
                                          <TableCell>
                                          <input type="text" value={current.name} />
                                          </TableCell>
                                          <TableCell>
                                          <input type="text" value={current.price} />
                                          </TableCell>
                                          <TableCell>
                                          <button onClick={() => setUpdateState(-1)} type="button">
                                              Cancel
                                          </button>
                                          <button type="submit">Save</button>
                                          </TableCell>
                                      </TableRow>
                                      ) : (
                                      <TableRow key={current.id}>
                                          <TableCell>{current.name}</TableCell>
                                          <TableCell>{current.price}</TableCell>
                                          <TableCell>
                                          {/* <button onClick={() => setUpdateState(current.id)} type="button">
                                              Edit
                                          </button> */}
                                          <button onClick={() => handleDelete(current.id)} type="button">
                                              Delete
                                          </button>
                                          </TableCell>
                                      </TableRow>
                                      )
                                  )}
                                  </TableBody>
                              </Table>
                              </TableContainer>
                          </form>
                      </Box>

                      </Components.Form>
                  </Components.SignInContainer>
                  </Components.Container>
    </Box>
      </>
    ) : null;
  }