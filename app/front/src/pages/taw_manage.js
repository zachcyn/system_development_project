import Footer from "../components/Footer/footer";
import LoggedNavbar from "../components/LoggedHeader/loggedHeader";
import Leaderboards from "../components/Leaderboards/index";
import routes from "../components/Header/headerRoutes";
import EditedBox from "../material/EditedBox/EditedBox";
import footerRoutes from "../components/Footer/footerRoutes";
import ModifyMatch from "../components/Modifier/modify_match";
import { TAW_data } from "../data/taw_data";
import EditedTypo from "../material/EditedTypo/EditedTypo";

function TAWModify() {
    return (
        <>
            <LoggedNavbar
                routes={routes}
                sticky
            />

            <EditedTypo variant="h1" sx={{mt:5}} align='center'>TAW 11</EditedTypo>
            <EditedTypo variant="subtitle1" textTransform="capitalize" align='center'>Level 3.1</EditedTypo>
            <br />
            <ModifyMatch data={TAW_data} />

            <EditedBox pt={6} px={1} mt={6}>
                <Footer content={footerRoutes} />
            </EditedBox>
        </>
    );
}
export default TAWModify;