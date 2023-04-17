import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Main from './pages/main';
import routes from './components/Header/headerRoutes';
import theme from './assets/theme';
import LoggedMain from './pages/loggedMain';
import Profile from './pages/profile';
import InfoManage from './pages/info_manage';
import TACModify from './pages/tac_manage';
import TAEModify from './pages/tae_manage';
import TAWModify from './pages/taw_manage';
import TBSModify from './pages/tbs_manage';

function App() {

  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Routes>
          {getRoutes(routes)}
          <Route path="/main" element={<Main />} />
          <Route path="/loggedMain" element={<LoggedMain />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/info_manage" element={<InfoManage />} />
          <Route path="/tac_manage" element={<TACModify/>} />
          <Route path="/tae_manage" element={<TAEModify/>} />
          <Route path="/taw_manage" element={<TAWModify/>} />
          <Route path="/tbs_manage" element={<TBSModify/>} />
          <Route path="*" element={<Navigate to="/main" />} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
