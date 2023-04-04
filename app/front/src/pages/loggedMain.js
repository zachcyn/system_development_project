import Footer from "../components/Footer/footer";
import routes from "../components/Header/headerRoutes";
import EditedBox from "../material/EditedBox/EditedBox";
import footerRoutes from "../components/Footer/footerRoutes";
import ImageSlider from "../components/Carousel";
import Cards from "../components/Card";
import LoggedNavbar from "../components/LoggedHeader/loggedHeader";

function LoggedMain() {
  return (
    <>
 
      <LoggedNavbar
        routes={routes}
        sticky
        />

      <EditedBox>
        <ImageSlider />
      </EditedBox>

      <EditedBox>
        <Cards />
      </EditedBox>

      <EditedBox pt={6} px={1} mt={6}>
        <Footer content={footerRoutes} />
      </EditedBox>
    </>
  );
}

export default LoggedMain;
