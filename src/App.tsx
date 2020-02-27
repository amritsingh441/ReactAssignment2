import React, { useState } from 'react';
import Header from './Components/header/Header';
import Dashboard from './Components/dashboard/Dashboard';
import Footer from './Components/footer/Footer';
import Grid from '@material-ui/core/Grid';
import Login from './Components/login/Login';
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from 'react-router-dom'

function App() {
  const [token,setToken] = useState('');
  const updateToken =(token:string) => {
    localStorage.setItem('token',token);
    setToken(token)
    
  }
  return (
    <div>
      <Grid container direction = "column">
        <Header></Header>
        <Router>
          <Route exact path = '/' component = {() =>(token)?<Redirect to = '/dashboard'></Redirect>: <Login updateToken = {updateToken} />} />
          <Route exact path = '/dashboard' component = {() => (token)?<Dashboard />:<Redirect to = '/'/>} />
        </Router>
        <Footer></Footer>
      </Grid>

    </div>
  );
}

export default App;
