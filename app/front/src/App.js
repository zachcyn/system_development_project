import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Main from './pages/main';
import routes from './components/Header/headerRoutes';
import theme from './assets/theme';
import LoggedMain from './pages/loggedMain';
import Profile from './pages/profile';

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
        </Routes>
    </ThemeProvider>
  );
}

export default App;
