import './App.css';
import {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Footer from './Components/paros/components/Footer';
import India from './pages/India';
import Sports from './pages/Sports';
import ScienceAndTech from './pages/ScienceAndTech';
import Economy from './pages/Economy';
import Politics from './pages/Politics';
import International from './pages/International';
import Governance from './pages/Governance';
import Error from './pages/Error';
import Logout from './pages/Logout'
import Admin_main from './Components/admin/Admin_main';
import Login from './Components/admin/Login';
import Register from './Components/admin/Register';
import Forgot_pass from './Components/admin/Forgot_pass';
import Login_admin from './Components/admin/Login_admin';

import {createGlobalStyle,ThemeProvider} from 'styled-components'
import { getThemeMode } from './state';
import { connect } from 'react-redux';

const GlobalStyle=createGlobalStyle`
body{
  background-color:${props=>props.theme.mode=='dark'?'rgb(73, 64, 64);':'#fff'};
  color:${props=>props.theme.mode==='dark'?'#fff':'#111'};
}
`;



function App(props) {

  const[theme, setTheme]=useState({mode: props.currentTheme})
  useEffect(()=>{
    setTheme({mode: props.currentTheme})
  }, [props.currentTheme])
  return (
    <ThemeProvider theme={theme}> 
  
      <>
         <GlobalStyle />
      {/* <Forgot_pass></Forgot_pass>
      <Register></Register>
      <Login></Login>*/}
      {/* <Admin_main></Admin_main>  */}
    
      
    
  
      <Router>
        <Routes>
          <Route exact path='/' element={<India />} />
          <Route exact path='/international' element={<International />} />
          <Route exact path='/political' element={<Politics />} />
          <Route exact path='/science' element={<ScienceAndTech />} />
          <Route exact path='/economy' element={<Economy />} />
          <Route exact path='/governance' element={<Governance />} />
          <Route exact path='/sports' element={<Sports />} />
          <Route exact path='/videos'  />
          <Route exact path='/user_login'  element={<Login></Login>} />
          <Route exact path='/user_register'  element={<Register/>} />
          <Route exact path='/admin_login'  element={<Login_admin></Login_admin>} />
          <Route exact path='/admin_main'  element={<Admin_main></Admin_main>} />
          <Route exact path='/user_logout'  element={<Logout></Logout>} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
     
    







    </>

    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    currentTheme: getThemeMode(state),
  }
}
// export default App
export default connect(mapStateToProps)(App);
