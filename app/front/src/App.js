import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Main from './pages/main';
import routes from './components/Header/headerRoutes';
import empty_routes from './components/Header/empty_headerRoutes';
import theme from './assets/theme';
import Profile from './pages/profile';
import InfoManage from './pages/info_manage';
import TourModify from './pages/tournament_manage';
import Tournament_page from './pages/tournament_page';
import TermsandCondition from './pages/t&c';
import Settings from './components/Settings';
import FemaleLeaderboard from './pages/femaleLeaderboard';
import MaleLeaderboard from './pages/maleLeaderboard';
// const cors = require('cors');

export const UserLoggedIn = createContext();

function App() {
  const [userLog, setUserLog] = useState(false);
  const [allRoutes, setRoutes] = useState(empty_routes);
  // console.log("All routes:");
  const ROUTES_data = function useRoutes() {
    useEffect(() => {
      if(allRoutes === empty_routes) {
        axios
        .get('http://localhost:3001/api/Tournaments')
        .then((res) => {
            console.log("Setting tournament");
            setRoutes(res.data);
            //console.log("API GET INSIDE TACDATA! :", filename.data);
            console.log("API DATA FETCHED:", res.data)
        })
        .catch((err) => {
            console.log('Error from useRoutes');
        }
        );
      }
  });
  }
  ROUTES_data();


    const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {

      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        if(route.tournament_name){
          //console.log("Tour key:", route.key);
          return <Route exact path={route.route} element={<Tournament_page />} key={route.key} />;
        }
        else if (route.gender === "Male"){
          return <Route exact path={route.route} element={<MaleLeaderboard />} key={route.key} />;
        }
        else if(route.gender === "Female"){
          return <Route exact path={route.route} element={<FemaleLeaderboard />} key={route.key} />;
        }
      }

      return null;
    });

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserLoggedIn.Provider value={[userLog, setUserLog]}>
          <Routes>
            {getRoutes(allRoutes)}
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
