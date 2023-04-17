import Footer from "../components/Footer/footer";
import LoggedNavbar from "../components/LoggedHeader/loggedHeader";
import Leaderboards from "../components/Leaderboards/index";
import routes from "../components/Header/headerRoutes";
import EditedBox from "../material/EditedBox/EditedBox";
import footerRoutes from "../components/Footer/footerRoutes";
import ModifyMatch from "../components/Modifier/modify_match";
import { TBS_data } from "../data/tbs_data";
import EditedTypo from "../material/EditedTypo/EditedTypo";

function TBSModify() {
    return (
        <>
            <LoggedNavbar
                routes={routes}
                sticky
            />

            <EditedTypo variant="h1" sx={{mt:5}} align='center'>TBS 2</EditedTypo>
            <EditedTypo variant="subtitle1" textTransform="capitalize" align='center'>Difficulty Degree 3.25</EditedTypo>
            <br />
            <ModifyMatch data={TBS_data} />

            <EditedBox pt={6} px={1} mt={6}>
                <Footer content={footerRoutes} />
            </EditedBox>
        </>
    );
}
export default TBSModify;