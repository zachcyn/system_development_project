import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Collapse from '@mui/material/Collapse'
import Icon from '@mui/material/Icon';
import EditedBox from '../../material/EditedBox/EditedBox';
import EditedTypo from '../../material/EditedTypo/EditedTypo';

function Dropdown({
    name,
    icon,
    children,
    collapseStatus,
    light,
    href,
    route,
    collapse,
    ...rest
  }) {
    const linkComponent = {
      component: "a",
      href,
      target: "_blank",
      rel: "noreferrer",
    };
  
    const routeComponent = {
      component: Link,
      to: route,
    };
  
    return (
      <>
        <EditedBox
          {...rest}
          mx={1}
          p={1}
          display="flex"
          alignItems="baseline"
          color={light ? "white" : "dark"}
          opacity={light ? 1 : 0.6}
          sx={{ cursor: "pointer", userSelect: "none" }}
          {...(route && routeComponent)}
          {...(href && linkComponent)}
        >
          <EditedTypo
            variant="body2"
            lineHeight={1}
            color="inherit"
            sx={{ alignSelf: "center", "& *": { verticalAlign: "middle" } }}
          >
            {icon}
          </EditedTypo>
          <EditedTypo
            variant="button"
            fontWeight="regular"
            textTransform="capitalize"
            color={light ? "white" : "dark"}
            sx={{ fontWeight: "100%", ml: 1, mr: 0.25 }}
          >
            {name}
          </EditedTypo>
          <EditedTypo variant="body2" color={light ? "white" : "dark"} ml="auto">
            <Icon sx={{ fontWeight: "normal", verticalAlign: "middle" }}>
              {collapse && "keyboard_arrow_down"}
            </Icon>
          </EditedTypo>
        </EditedBox>
        {children && (
          <Collapse in={Boolean(collapseStatus)} timeout={400} unmountOnExit>
            {children}
          </Collapse>
        )}
      </>
    );
  }
  
  // Setting default values for the props of DefaultNavbarDropdown
  Dropdown.defaultProps = {
    children: false,
    collapseStatus: false,
    light: false,
    href: "",
    route: "",
  };
  
  // Typechecking props for the DefaultNavbarDropdown
  Dropdown.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    children: PropTypes.node,
    collapseStatus: PropTypes.bool,
    light: PropTypes.bool,
    href: PropTypes.string,
    route: PropTypes.string,
    collapse: PropTypes.bool.isRequired,
  };
  
  export default Dropdown;
  