import Footer from "../components/Footer/footer";
import Navbar from "../components/Header";
import routes from "../components/Header/headerRoutes";
import EditedBox from "../material/EditedBox/EditedBox";
import footerRoutes from "../components/Footer/footerRoutes";
import { styled } from '@mui/material/styles';
import { TableSortLabel, Box, TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper, Grid } from '@mui/material';
import { LooksOne, LooksTwo, Looks3 } from '@mui/icons-material';
import colors from "../assets/theme/base/colors";

const { white, text, info, secondary } = colors;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Leaderboards() {
  return (
    <>
      <Navbar
        routes={routes}
        sticky
      />

      <EditedBox sx={{ minWidth: '200px', maxWidth: '900px', margin: 'auto', display: "flex", mb: '20px', mt: '50px' }}>
        <Grid container sx={{ fontSize: 15, fontWeight: 'bold', align: 'center', color: white.main }}>

          <Grid item align='center' md={4}>
          </Grid>
          <Grid item align='center' md={4}>
            <LooksOne />
          </Grid>
          <Grid item align='center' md={4}>
          </Grid>

          <Grid item align='center' md={4}>
          </Grid>
          <Grid item align='center' md={4} bgcolor='grey'>
            Chu Yie Nian
          </Grid>
          <Grid item align='center' md={4}>
            <Looks3></Looks3>
          </Grid>

          <Grid item align='center' md={4}>
            <LooksTwo></LooksTwo>
          </Grid>
          <Grid item align='center' md={4} bgcolor='grey'>
            25&nbsp;&nbsp; $25,000
          </Grid>
          <Grid item align='center' md={4} bgcolor='grey'>
            Eddy Levinskas
          </Grid>

          <Grid item align='center' md={4} bgcolor='grey'>
            Hatim Bossman
          </Grid>
          <Grid item align='center' md={4} bgcolor='grey'>

          </Grid>
          <Grid item align='center' md={4} bgcolor='grey'>
            15&nbsp;&nbsp;$10,000
          </Grid>

          <Grid item align='center' justifyContent='center' md={4} bgcolor='grey'>
            23&nbsp;&nbsp;$6,500
          </Grid>
          <Grid item align='center' justifyContent='center' md={4} bgcolor='grey'>
          </Grid>
          <Grid item align='center' justifyContent='center' md={4} bgcolor='grey'>
          </Grid>
        </Grid>

      </EditedBox >

      <EditedBox minWidth='200px' maxWidth='900px' margin='auto' display="flex">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="Male Leaderboard">
            <TableHead sx={{ display: "table-header-group" }}>
              <TableRow>
                <TableCell align='center'>Rank</TableCell>
                <TableCell align='center'>Player Name</TableCell>
                <TableCell align='center'>Points</TableCell>
                <TableCell align='center'>Prize Money</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {maleLeaderboard.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align='center'>{row.Rank}</TableCell>
                  <TableCell align='center'>{row["Player Name"]}</TableCell>
                  <TableCell align='center'>{row.Points}</TableCell>
                  <TableCell align='center'>{row["Prize Money"]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </EditedBox>

      <EditedBox pt={6} px={1} mt={6}>
        <Footer content={footerRoutes} />
      </EditedBox>
    </>
  );
}
export default Leaderboards;


const maleLeaderboard = [{
  "id": 1,
  "Rank": 18,
  "Player Name": "Farlee O'Fairy",
  "Points": 53,
  "Prize Money": 361341
}, {
  "id": 2,
  "Rank": 8,
  "Player Name": "Adham Milby",
  "Points": 6,
  "Prize Money": 953308
}, {
  "id": 3,
  "Rank": 10,
  "Player Name": "Josephina Reeday",
  "Points": 71,
  "Prize Money": 842709
}, {
  "id": 4,
  "Rank": 11,
  "Player Name": "Rosette Branche",
  "Points": 16,
  "Prize Money": 8390
}, {
  "id": 5,
  "Rank": 16,
  "Player Name": "Rhett Heinz",
  "Points": 72,
  "Prize Money": 450815
}, {
  "id": 6,
  "Rank": 14,
  "Player Name": "Roxane Wennam",
  "Points": 6,
  "Prize Money": 400443
}, {
  "id": 7,
  "Rank": 15,
  "Player Name": "Basile Keary",
  "Points": 80,
  "Prize Money": 863637
}, {
  "id": 8,
  "Rank": 1,
  "Player Name": "Courtnay Kielt",
  "Points": 92,
  "Prize Money": 33005
}, {
  "id": 9,
  "Rank": 11,
  "Player Name": "Jerad Essame",
  "Points": 52,
  "Prize Money": 993973
}, {
  "id": 10,
  "Rank": 16,
  "Player Name": "Nicky Todaro",
  "Points": 96,
  "Prize Money": 487186
}, {
  "id": 11,
  "Rank": 13,
  "Player Name": "Ardelis Spataro",
  "Points": 51,
  "Prize Money": 452440
}, {
  "id": 12,
  "Rank": 9,
  "Player Name": "Dosi Rafe",
  "Points": 78,
  "Prize Money": 436743
}, {
  "id": 13,
  "Rank": 12,
  "Player Name": "Aurelea Kenion",
  "Points": 55,
  "Prize Money": 445086
}, {
  "id": 14,
  "Rank": 12,
  "Player Name": "Cassi Maes",
  "Points": 87,
  "Prize Money": 475815
}, {
  "id": 15,
  "Rank": 1,
  "Player Name": "Maximilianus Conant",
  "Points": 68,
  "Prize Money": 709829
}, {
  "id": 16,
  "Rank": 8,
  "Player Name": "Christean McAlinion",
  "Points": 30,
  "Prize Money": 779371
}, {
  "id": 17,
  "Rank": 7,
  "Player Name": "Garreth Delwater",
  "Points": 85,
  "Prize Money": 773156
}, {
  "id": 18,
  "Rank": 11,
  "Player Name": "Tonie Clingoe",
  "Points": 88,
  "Prize Money": 884670
}, {
  "id": 19,
  "Rank": 4,
  "Player Name": "Blake Deer",
  "Points": 79,
  "Prize Money": 398353
}, {
  "id": 20,
  "Rank": 16,
  "Player Name": "Sara Tizard",
  "Points": 1,
  "Prize Money": 107739
}]