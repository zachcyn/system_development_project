import Footer from "../components/Footer/footer";
import LoggedNavbar from "../components/LoggedHeader/loggedHeader";
import Leaderboards from "../components/Leaderboards/index";
import routes from "../components/Header/headerRoutes";
import EditedBox from "../material/EditedBox/EditedBox";
import footerRoutes from "../components/Footer/footerRoutes";
import ModifyMatch from "../components/Modifier/modify_match";
import { TAE_data } from "../data/tae_data";
import EditedTypo from "../material/EditedTypo/EditedTypo";

function TAEModify() {
    return (
        <>
            <LoggedNavbar
                routes={routes}
                sticky
            />

            <EditedTypo variant="h1" sx={{mt:5}} align='center'>TAE 21</EditedTypo>
            <EditedTypo variant="subtitle1" textTransform="capitalize" align='center'>Difficulty Degree 2.3</EditedTypo>
            <br />
            <ModifyMatch data={TAE_data} />

            <EditedBox pt={6} px={1} mt={6}>
                <Footer content={footerRoutes} />
            </EditedBox>
        </>
    );
}
export default TAEModify;