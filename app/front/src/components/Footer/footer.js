import PropTypes from "prop-types";

// mui material
import MuiLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import { Link } from "react-router-dom";

// mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";

import EditedBox from "../../material/EditedBox/EditedBox";
import EditedTypo from "../../material/EditedTypo/EditedTypo";
import TermsandCondition from "../../pages/t&c";
import SettingsPage from "../Settings";
import { useState } from "react";

function Footer({ company, links, socials, light }) {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [languagePopup, setLanguagePopup] = useState(false);
  const { href, name } = company;

  const year = new Date().getFullYear();

  function settingsChecker(name){
    if(name === "Settings"){
      setButtonPopup(true);
    }setButtonPopup(false);
  }

  function routeChecker(link){
    if(link === "settings"){
      return null;
    }return link;
  }

  const renderSocials = socials.map((social) => (
    <EditedTypo
      key={social.link}
      component={Link}
      href={social.link}
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
    >
      {social.icon}
    </EditedTypo>
  ));

  return (
    <EditedBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={{ xs: 2, lg: 3, xl: 6 }}
            mb={3}
          >
            <EditedTypo
              component={Link}
              href={"/terms_and_condition"}
              to={"/terms_and_condition"}
              variant="body2"
              color={light ? "white" : "secondary"}
              fontWeight="regular"
              sx={{cursor:"pointer"}}
            >
              T&Cs
            </EditedTypo>
            <EditedTypo
              component={Link}
              variant="body2"
              color={light ? "white" : "secondary"}
              fontWeight="regular"
              sx={{cursor:"pointer"}}
              onClick={() => setButtonPopup(true)}
            >
              Settings
            </EditedTypo>
            <SettingsPage trigger={buttonPopup} setTrigger={setButtonPopup} />
            <EditedTypo
              component={Link}
              variant="body2"
              color={light ? "white" : "secondary"}
              fontWeight="regular"
              sx={{cursor:"pointer"}}
              onClick={() => setLanguagePopup(true)}
            >
              Languages
            </EditedTypo>
            <SettingsPage trigger={buttonPopup} setTrigger={setButtonPopup} />
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Stack display="flex" direction="row" justifyContent="center" spacing={3} mt={1} mb={3}>
            {renderSocials}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <EditedTypo variant="body2" color={light ? "white" : "secondary"}>
            Copyright &copy; {year} TennisTracker by{" "}
            <EditedTypo
              component={Link}
              href={href}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color={light ? "white" : "secondary"}
            >
              {name}
            </EditedTypo>
            .
          </EditedTypo>
        </Grid>
      </Grid>
    </EditedBox>
  );
}

// Setting default values for the props of CenteredFooter
Footer.defaultProps = {
  company: { href: "", name: "UWE SysDev Project Team 2" },
  socials: [
    { icon: <FacebookIcon fontSize="small" />, link: "https://www.facebook.com/" },
    {
      icon: <TwitterIcon fontSize="small" />,
      link: "https://twitter.com/",
    },
    {
      icon: <InstagramIcon fontSize="small" />,
      link: "https://www.instagram.com/",
    },
    {
      icon: <PinterestIcon fontSize="small" />,
      link: "https://ro.pinterest.com/",
    },
    { icon: <GitHubIcon fontSize="small" />, link: "https://github.com" },
  ],
  light: false,
};

// Typechecking props for the CenteredFooter
Footer.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
  socials: PropTypes.arrayOf(PropTypes.object),
  light: PropTypes.bool,
};

export default Footer;
