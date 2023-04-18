import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Main from './pages/main';
import routes from './components/Header/headerRoutes';
import theme from './assets/theme';
import LoggedMain from './pages/loggedMain';
import Profile from './pages/profile';
import InfoManage from './pages/info_manage';
import TourModify from './pages/tournament_manage';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/getMalePayers')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookList');
      });
  }, []);
    console.log(books)

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
            <Route path="/tournament_manage" element={<TourModify/>} />
            <Route path="*" element={<Navigate to="/main" />} />
          </Routes>
      </ThemeProvider>
    );
}

export default App;
