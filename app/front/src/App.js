import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Main from './pages/main';
import routes from './components/Header/headerRoutes';
import theme from './assets/theme';
import Profile from './pages/profile';
import InfoManage from './pages/info_manage';
import TourModify from './pages/tournament_manage';
import Tournament_page from './pages/tournament_page';
import TermsandCondition from './pages/t&c';
import Settings from './components/Settings';

// const cors = require('cors');

export const UserLoggedIn = createContext();

function App() {
  const [userLog, setUserLog] = useState(false);

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
        <UserLoggedIn.Provider value={[userLog, setUserLog]}>
          <Routes>
            {getRoutes(routes)}
            <Route path="/main" element={<Main />} />
            <Route path="/tournament_page" element={<Tournament_page />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/info_manage" element={<InfoManage />} />
            <Route path="/tournament_manage" element={<TourModify />} />
            <Route path="/terms_and_condition" element={<TermsandCondition />} />
            <Route path="*" element={<Navigate to="/main" />} />
          </Routes>
        </UserLoggedIn.Provider>
      </ThemeProvider>
    );
}

export default App;
