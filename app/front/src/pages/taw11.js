import Footer from "../components/Footer/footer";
import Navbar from "../components/Header";

// Routes
import routes

from "../components/Header/headerRoutes";
import EditedBox from "../material/EditedBox/EditedBox";
import footerRoutes from "../components/Footer/footerRoutes";
import { Grid, Stack, Paper } from "@mui/material";
import { TAW_data } from "../data/taw_data";
import { ExpandMore } from "@mui/icons-material";
import styled from "@emotion/styled";
import MuiAccordion from "@mui/material/Accordion"
import MuiAccordionSummary from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import EditedTypo from "../material/EditedTypo/EditedTypo";

const Accordion = styled((props) => (
  <MuiAccordion diasbleGutters elecatoin={0} {...props}/>
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  margin: 10,
  backgroundColor: "transparent",
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMore sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  // borderRadius: "10px",
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'white',
  // flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(-90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  backgroundColor: "transparent",
}));

const Data = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  margin: 4,
}));


function TAW11() {
  return (
    <>
      <Navbar
        routes={routes}
        sticky
      />

      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <EditedTypo variant="h1" sx={{mt:5}}>TAW 11</EditedTypo>
        <EditedTypo variant="subtitle1" textTransform="capitalize">degree of difficulty 3.1</EditedTypo>
        {TAW_data.map((elem) => (
          <Grid item key={TAW_data.indexOf(elem)} width="70%" md={2}>
              <EditedTypo 
              textTransform="capitalize" 
              sx={{textAlign: "center", 
              fontSize:"1.2rem", 
              "@media (min-width:600px)" : {fontSize: '1.5rem'}}}
              >
                <EditedTypo 
                display="inline" 
                sx={{fontSize:"inherit"}}
                >
                  {elem.icon}
                  </EditedTypo>
                {elem.gender}
                </EditedTypo>
                {elem.game.map((item) => (
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMore />}
                      aria-controls="panel-content"
                      id="panel-header"
                    >
                      <EditedTypo display="inline" sx={{textAlign:"right", fontSize:"1.2rem", mr:2}}>{item.round_icon}</EditedTypo>
                      <EditedTypo display="inline" sx={{fontSize:"inherit"}}>Round {item.round_no}</EditedTypo>
                    </AccordionSummary>
                    <AccordionDetails>
                      {item.round_detail.map((details) => (
                            // <Card sx={{margin:2}}>
                            //   <Typography>{item.player_a} vs {item.player_b}</Typography>
                            //   <Typography>{item.score_a} : {item.score_b}</Typography>
                            // </Card>
                            <Stack>
                              <Data>
                                <EditedTypo>{details.player_a} vs {details.player_b}</EditedTypo>
                                <EditedTypo>{details.score_a} : {details.score_b}</EditedTypo>
                                </Data>
                            </Stack>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ))}
          </Grid>
        ))}
      </Grid>


      <EditedBox pt={6} px={1} mt={6}>
        <Footer content={footerRoutes} />
      </EditedBox>

    </>
  );
}

export default TAW11;
