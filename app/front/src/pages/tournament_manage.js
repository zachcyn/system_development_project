import Footer from "../components/Footer/footer";
import Leaderboards from "../components/Leaderboards/index";
import routes from "../components/Header/headerRoutes";
import EditedBox from "../material/EditedBox/EditedBox";
import footerRoutes from "../components/Footer/footerRoutes";
import ModifyMatch from "../components/Modifier/modify_match";
import { TAC_data } from "../data/tac_data";
import EditedTypo from "../material/EditedTypo/EditedTypo";
import { tournaments } from "./info_manage";
import Navbar from "../components/Header";

function TourModify() {
    return (
        <>
            <Navbar
                routes={routes}
                sticky
            />

            <ModifyMatch data={tournaments} />

            <EditedBox pt={6} px={1} mt={6}>
                <Footer content={footerRoutes} />
            </EditedBox>
        </>
    );
}
export default TourModify;