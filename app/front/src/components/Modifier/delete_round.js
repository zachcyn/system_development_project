import { useState, useEffect } from "react";
import * as Components from "./rounds_components";
import { Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";
import Icon from "@mui/material/Icon";
import { filetitle } from "../../pages/info_manage";
import EditedButton from "../../material/EditedButton/EditedButton";

export default function DeleteRound(props) {
  const [fileTitle, setFileTitle] = useState([]);

  useEffect(() => {
    setFileTitle(filetitle);
  }, []);

  function handleDelete(round_no, gender) {
    const newfileTitle = fileTitle.map((lay1) => ({
      ...lay1,
      details: lay1.details.map((lay2) => ({
        ...lay2,
        game: lay2.game.filter((lay3) => lay2.gender !== gender && lay3.round_no !== round_no),

      })),
    }));
    setFileTitle(newfileTitle);
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
              sx={{ ml: 2, mt: 1, mb: -5 }}
            >
              <Icon onClick={() => props.setTrigger(false)} sx={{ cursor: 'pointer' }}>close</Icon>
            </Box>
            <Components.Form>
              <Box sx={{ height: 400, width: '100%' }}>
                <form>
                  <TableContainer component={Paper} align='center'>
                    <Table>
                      <TableHead sx={{ display: "table-header-group" }}>
                        <TableRow>
                          <TableCell style={{ textAlign: 'center' }}>Round</TableCell>
                          <TableCell style={{ textAlign: 'center' }}>Gender</TableCell>
                          <TableCell style={{ textAlign: 'center' }}>Delete</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {fileTitle.map((lay1) => (
                          <>
                            {lay1.details?.map((lay2) => (
                              <>
                                {lay2.game?.map((lay3) => (
                                  <TableRow key={`${lay1.round_no}-${lay2.gender}-${lay3.round_no}`}>
                                    <TableCell style={{ textAlign: 'center' }}>{lay3.round_no}</TableCell>
                                    <TableCell style={{ textAlign: 'center' }}>{lay2.gender}</TableCell>
                                    <TableCell style={{ textAlign: 'center' }}>
                                      <EditedButton onClick={() => handleDelete(lay3.round_no, lay2.gender)}>
                                        Delete
                                      </EditedButton>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </>
                            ))}
                          </>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </form>
              </Box>
            </Components.Form>
          </Components.SignInContainer>
        </Components.Container >
      </Box >
    </>
  ) : null
}
