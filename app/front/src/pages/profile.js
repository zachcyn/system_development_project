import Footer from "../components/Footer/footer";
import routes from "../components/Header/headerRoutes";
import EditedBox from "../material/EditedBox/EditedBox";
import footerRoutes from "../components/Footer/footerRoutes";
import { AccountProfile } from "../components/Profile/profileCard";
import { Container, Typography, Grid, Stack } from "@mui/material";
import { AccountProfileDetails } from "../components/Profile/profileDetails";
import Navbar from "../components/Header";

function Profile() {
  return (
    <>
 
      <Navbar
        routes={routes}
        sticky
        />

        <Container maxWidth="lg">
        <Stack spacing={3}>
            <Typography variant="h4" sx={{ml:5,mt:5}}>
              Account Settings
            </Typography>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
              >
                <AccountProfile />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={8}
              >
                <AccountProfileDetails />
              </Grid>
            </Grid>
        </Stack>
      </Container>




      <EditedBox pt={6} px={1} mt={6}>
        <Footer content={footerRoutes} />
      </EditedBox>
    </>
  );
}

export default Profile;
