import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// mui material
import Container from "@mui/material/Container";
import { Icon, Tooltip, IconButton, Avatar, Menu, MenuItem } from "@mui/material";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";

// edited material
import EditedBox from "../../material/EditedBox/EditedBox";
import EditedTypo from "../../material/EditedTypo/EditedTypo";

// components file
import Dropdown from "../Header/Dropdown";
import MobileNavbar from "../Header/MobileVersion";

// Material Kit 2 React base styles
import breakpoints from "../../assets/theme/base/breakpoints";
import TerminentLogo from "../../assets/logo/terminentlight.png"
import { AccountCircle } from "@mui/icons-material";
import settings from "../Header/settings";

import { useNavigate } from "react-router-dom";

function LoggedNavbar({ brand, routes, transparent, light, sticky, relative, center }) {
  const [dropdown, setDropdown] = useState("");
  const [dropdownEl, setDropdownEl] = useState("");
  const [dropdownName, setDropdownName] = useState("");
  const [arrowRef, setArrowRef] = useState(null);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const navigation = useNavigate();


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  function brandSizeChecker(){
    if (mobileView === true) {
      return "none"
    }return "inline"
  }

  const renderNavbarItems = routes.map(({ name, icon, href, route, collapse }) => (
    <Dropdown
      key={name}
      name={name}
      icon={icon}
      href={href}
      route={route}
      collapse={Boolean(collapse)}
      onMouseEnter={({ currentTarget }) => {
        if (collapse) {
          setDropdown(currentTarget);
          setDropdownEl(currentTarget);
          setDropdownName(name);
        }
      }}
      onMouseLeave={() => collapse && setDropdown(null)}
      light={light}
    />
  ));

  // Render the routes on the dropdown menu
  const renderRoutes = routes.map(({ name, collapse, columns, rowsPerColumn }) => {
    let template;

    // Render the dropdown menu that should be display as columns
    if (collapse && columns && name === dropdownName) {
      const calculateColumns = collapse.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / rowsPerColumn);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
      }, []);

      template = (
        <Grid key={name} container spacing={3} py={1} px={1.5}>
          {calculateColumns.map((cols, key) => {
            const gridKey = `grid-${key}`;
            const dividerKey = `divider-${key}`;

            return (
              <Grid key={gridKey} item xs={12 / columns} sx={{ position: "relative" }}>
                {cols.map((col, index) => (
                  <Fragment key={col.name}>
                    <EditedTypo
                      display="block"
                      variant="button"
                      fontWeight="bold"
                      textTransform="capitalize"
                      py={1}
                      px={0.5}
                      mt={index !== 0 ? 2 : 0}
                    >
                      {col.name}
                    </EditedTypo>
                    {col.collapse.map((item) => (
                      <EditedTypo
                        key={item.name}
                        component={item.route ? Link : MuiLink}
                        to={item.route ? item.route : ""}
                        href={item.href ? item.href : (e) => e.preventDefault()}
                        target={item.href ? "_blank" : ""}
                        rel={item.href ? "noreferrer" : "noreferrer"}
                        minWidth="11.25rem"
                        display="block"
                        variant="button"
                        color="text"
                        textTransform="capitalize"
                        fontWeight="regular"
                        py={0.625}
                        px={2}
                        sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                          borderRadius: borderRadius.md,
                          cursor: "pointer",
                          transition: "all 300ms linear",

                          "&:hover": {
                            backgroundColor: grey[200],
                            color: dark.main,
                          },
                        })}
                      >
                        {item.name}
                      </EditedTypo>
                    ))}
                  </Fragment>
                ))}
                {key !== 0 && (
                  <Divider
                    key={dividerKey}
                    orientation="vertical"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "-4px",
                      transform: "translateY(-45%)",
                      height: "90%",
                    }}
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
      );

      // Render the dropdown menu that should be display as list items
    } else if (collapse && name === dropdownName) {
      template = collapse.map((item) => {
        const linkComponent = {
          component: MuiLink,
          href: item.href,
          target: "_blank",
          rel: "noreferrer",
        };

        const routeComponent = {
          component: Link,
          to: item.route,
        };

        return (
          <EditedTypo
            key={item.name}
            {...(item.route ? routeComponent : linkComponent)}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            variant="button"
            textTransform="capitalize"
            minWidth={item.description ? "14rem" : "12rem"}
            color={item.description ? "dark" : "text"}
            fontWeight={item.description ? "bold" : "regular"}
            py={item.description ? 1 : 0.625}
            px={2}
            sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
              borderRadius: borderRadius.md,
              cursor: "pointer",
              transition: "all 300ms linear",

              "&:hover": {
                backgroundColor: grey[200],
                color: dark.main,

                "& *": {
                  color: dark.main,
                },
              },
            })}
          >
            {item.description ? (
              <EditedBox>
                {item.name}
                <EditedTypo
                  display="block"
                  variant="button"
                  color="text"
                  fontWeight="regular"
                  sx={{ transition: "all 300ms linear" }}
                >
                  {item.description}
                </EditedTypo>
              </EditedBox>
            ) : (
              item.name
            )}
            {item.collapse && (
              <Icon
                fontSize="small"
                sx={{ fontWeight: "normal", verticalAlign: "middle", mr: -0.5 }}
              >
                keyboard_arrow_right
              </Icon>
            )}
          </EditedTypo>
        );
      });
    }

    return template;
  });

  // Routes dropdown menu
  const dropdownMenu = (
    <Popper
      anchorEl={dropdown}
      popperRef={null}
      open={Boolean(dropdown)}
      placement="top-start"
      transition
      style={{ zIndex: 10 }}
      modifiers={[
        {
          name: "arrow",
          enabled: true,
          options: {
            element: arrowRef,
          },
        },
      ]}
      onMouseEnter={() => setDropdown(dropdownEl)}
      onMouseLeave={() => {
        setDropdown(null);
        setDropdownName("");
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: ({ palette: { white } }) => white.main,
          }}
        >
          <EditedBox borderRadius="lg">
            <EditedTypo variant="h1" color="white">
            <Icon ref={setArrowRef} sx={{ mt: -3 }}>
                arrow_drop_up
              </Icon>
            </EditedTypo>
            <EditedBox shadow="lg" borderRadius="lg" p={2} mt={2}>
              {renderRoutes}
            </EditedBox>
          </EditedBox>
        </Grow>
      )}
    </Popper>
  );

  return (
    <Container
      sx={sticky ? { position: "sticky", top: 0, zIndex: 10 } : null}
    >
      <EditedBox
        py={1}
        px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        borderRadius="xl"
        my={relative ? 0 : 2}
        mx={relative ? 0 : 3}
        width={relative ? "100%" : "calc(100% - 48px)"}
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        position={"relative"}
        left={0}
        zIndex={3}
        sx={({ palette: { transparent: transparentColor, white }, functions: { rgba } }) => ({
          backgroundColor: transparent ? transparentColor.main : rgba(white.main, 0.8),
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        })}
      >
        <EditedBox display="flex" justifyContent="space-between" alignItems="center">
          <EditedBox component={Link} to="/" lineHeight={1} sx={{ml: 1}}>
          <img src={TerminentLogo} width={relative? 50 : 50} alt="Terminent Logo"/>
          </EditedBox>
          <EditedBox
            component={Link}
            to="/"
            lineHeight={1}
            py={transparent ? 1.5 : 0.75}
            pl={relative || transparent ? 0 : { xs: 0, lg: 1 }}
          >
            <EditedTypo variant="button" fontWeight="bold" color={light ? "white" : "dark"} display={brandSizeChecker} fontSize="18px">
              {brand}
            </EditedTypo>
          </EditedBox>
          <EditedBox
            color="inherit"
            display={{ xs: "none", lg: "flex" }}
            ml="auto"
            mr={center ? "auto" : 0}
          >
            {renderNavbarItems}
          </EditedBox>
          {/* <EditedBox ml={{ xs: "auto", lg: 0 }}>
              <EditedButton 
                onClick={() => setButtonPopup(true)}
                color='info'
                >
                  Login / SignUp
                </EditedButton>
          </EditedBox> */}
          <EditedBox sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar>
                    <AccountCircle fontSize="large" color='info'/>
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '70px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting,index) => (
                <MenuItem key={index} onClick={() => {navigation(setting.route)}}>
                  <EditedTypo textAlign="center" fontSize="15px">{setting.name}</EditedTypo>
                </MenuItem>
              ))}
            </Menu>
          </EditedBox>
          <EditedBox
            display={{ xs: "inline-block", lg: "none" }}
            lineHeight={0}
            py={1.5}
            pl={1.5}
            color={transparent ? "white" : "inherit"}
            sx={{ cursor: "pointer" }}
            onClick={openMobileNavbar}
          >
            <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
          </EditedBox>
        </EditedBox>
        <EditedBox
          bgColor={transparent ? "white" : "transparent"}
          shadow={transparent ? "lg" : "none"}
          borderRadius="xl"
          px={transparent ? 2 : 0}
        >
          {mobileView && <MobileNavbar routes={routes} open={mobileNavbar} />}
        </EditedBox>
      </EditedBox>
      {dropdownMenu}
      {/* <EditedBox display={brandSizeChecker}>
        <FormComponent trigger={buttonPopup} setTrigger={setButtonPopup}/>
      </EditedBox>
      <EditedBox display={formChecker}>
        <PopUpMV trigger={buttonPopup} setTrigger={setButtonPopup} />
      </EditedBox> */}
    </Container>
  );
}

// Setting default values for the props of DefaultNavbar
LoggedNavbar.defaultProps = {
  brand: "Terminent",
  transparent: false,
  light: false,
  action: false,
  sticky: false,
  relative: false,
  center: false,
};

// Typechecking props for the DefaultNavbar
LoggedNavbar.propTypes = {
  brand: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
        "default",
        "white",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
  sticky: PropTypes.bool,
  relative: PropTypes.bool,
  center: PropTypes.bool,
};

export default LoggedNavbar;
