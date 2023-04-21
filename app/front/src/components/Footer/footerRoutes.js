// @mui iconsEditedTypo
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import EditedTypo from "../../material/EditedTypo/EditedTypo";
// Images
import logo from  "../../assets/logo/terminentlight.png"

const date = new Date().getFullYear();

export default {
  brand: {
    name: "UWE SysDev Project Team 2",
    image: logo,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/",
    },
  ],
  copyright: (
    <EditedTypo variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Terminent by{" "}
      <EditedTypo
        component="a"
        href=""
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        UWE SysDev Project Team 2
      </EditedTypo>
      .
    </EditedTypo>
  ),
};
