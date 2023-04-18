import Footer from "../components/Footer/footer";
import LoggedNavbar from "../components/LoggedHeader/loggedHeader";
import Leaderboards from "../components/Leaderboards/index";
import routes from "../components/Header/headerRoutes";
import EditedBox from "../material/EditedBox/EditedBox";
import footerRoutes from "../components/Footer/footerRoutes";
import ModifyMatch from "../components/Modifier/modify_match";
import { TAC_data } from "../data/tac_data";
import EditedTypo from "../material/EditedTypo/EditedTypo";
import { filetitle, tournaments, levels } from "./info_manage";

function TourModify() {
    return (
        <>
            <LoggedNavbar
                routes={routes}
                sticky
            />

            <EditedTypo variant="h1" sx={{mt:5}} align='center'>{tournaments}</EditedTypo>
            <EditedTypo variant="subtitle1" textTransform="capitalize" align='center'>{levels}</EditedTypo>
            <br />
            <ModifyMatch data={filetitle} />

            <EditedBox pt={6} px={1} mt={6}>
                <Footer content={footerRoutes} />
            </EditedBox>
        </>
    );
}
export default TourModify;