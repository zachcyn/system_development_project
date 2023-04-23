import Footer from "../components/Footer/footer";
import Navbar from "../components/Header";
import routes from "../components/Header/headerRoutes";
import EditedBox from "../material/EditedBox/EditedBox";
import footerRoutes from "../components/Footer/footerRoutes";
import ImageSlider from "../components/Carousel";
import Cards from "../components/Card";
import { filetitle } from "./info_manage";

function Main() {
  return (
    <>
      <Navbar
        routes={routes}
        sticky
      />
      <EditedBox>
        <ImageSlider />
      </EditedBox>

      {/* <EditedBox>
        <Cards data={filetitle} />
      </EditedBox> */}

      <EditedBox pt={6} px={1} mt={6}>
        <Footer content={footerRoutes} />
      </EditedBox>
    </>
  );
}

export default Main;
