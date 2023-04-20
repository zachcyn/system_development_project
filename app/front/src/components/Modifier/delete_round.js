import {useState} from "react";
// import * as Components from "../SignInUp/webComponents";
import * as Components from "./rounds_components";
import { Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material";
import Icon from "@mui/material/Icon";
import { filetitle } from "../../pages/info_manage";


function DeleteRound() {
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

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Action</TableCell>
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
    </div>
  );
}

export default DeleteRound;





// const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'First name', width: 130 },
//     { field: 'lastName', headerName: 'Last name', width: 130 },
//     {
//       field: 'age',
//       headerName: 'Age',
//       type: 'number',
//       width: 90,
//     },
//     {
//       field: 'fullName',
//       headerName: 'Full name',
//       description: 'This column has a value getter and is not sortable.',
//       sortable: false,
//       width: 160,
//       valueGetter: (params) =>
//         `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//     },
//   ];


// export default function DeleteRound(props) {
//     const [inputs, setInputs] = useState({});

//     const handleChange = (event) => {
//         const email = event.target.name;
//         const pass = event.target.value;
//         setInputs(values => ({...values, [email]: pass}))
//       }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(inputs)
//     };

//      return(props.trigger) ? (
//         <>
//         <Box 
//             width={"100%"}
//             height="100vh"
//             sx={{
//                     align: 'center', 
//                     overflow: 'auto',
//                     position:'fixed',
//                     backgroundColor: '#00000033',
//                     display:'flex',
//                     justifyContent:'center',
//                     alignItems:'center',
//                     top: 0,
//                     left: 0
//                 }}
//         >
//          <Components.Container>
//              <Components.SignInContainer>
//                 <Box
//                     justifyContent="flex-start"
//                     alignItems="flex-start"
//                     display={'flex'}
//                     sx={{ml:2, mt:1, mb:-5}}
//                 >
//                      <Icon onClick={() => props.setTrigger(false)} sx={{cursor:'pointer'}}>close</Icon>
//                 </Box>
//                   <Components.Form
//                     onSubmit={handleSubmit}
//                   >

//                 <Box sx={{ height: 400, width: '100%' }}>
//                 {/* <DataGrid
//                     rows={rows}
//                     columns={columns}
//                     initialState={{
//                     pagination: {
//                         paginationModel: {
//                         pageSize: 5,
//                         },
//                     },
//                     }}
//                     pageSizeOptions={[5]}
//                     checkboxSelection
//                     disableRowSelectionOnClick
//                 /> */}
//                 </Box>

//                       {/* <Components.Title>Delete Round</Components.Title>
//                       <TableContainer sx={{ maxHeight: 440 }}>
//                             <Table stickyHeader aria-label="sticky table">
//                                 <TableHead>
//                                     <TableRow>
//                                     {columns.map((column) => (
//                                         <TableCell
//                                         key={column.id}
//                                         align={column.align}
//                                         style={{ minWidth: column.minWidth }}
//                                         >
//                                         {column.label}
//                                         </TableCell>
//                                     ))}
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {filetitle
//                                     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                                     .map((row) => {
//                                         return (
//                                         <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                                             {columns.map((column) => {
//                                             const value = row[column.id];
//                                             return (
//                                                 <TableCell key={column.id} align={column.align}>
//                                                 {column.format && typeof value === 'number'
//                                                     ? column.format(value)
//                                                     : value}
//                                                 </TableCell>
//                                             );
//                                             })}
//                                         </TableRow>
//                                         );
//                                     })}
//                                 </TableBody>
//                             </Table>
//                         </TableContainer> */}

//                       <Components.Button type="delete" onClick={() => props.setTrigger(false)}>Confirm Delete</Components.Button>
//                   </Components.Form>
//              </Components.SignInContainer>
//             </Components.Container>
//          </Box>
//         </>
//      ) : "";
// };