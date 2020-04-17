import React from 'react';
import './App.css';
import Home from './Home.js'
import Rooms from './Rooms.js'
import SingleRoom from './SingleRoom.js'
import ErrorPage from './ErrorPage.js'
import { Route, Switch } from 'react-router-dom'
import NavBar from './NavBar.js'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/rooms" component = {Rooms}/>
        <Route exact path = "/rooms:slug" component = {SingleRoom}/>
        <Route component = {ErrorPage}/>
      </Switch>
    </>


  );
}

export default App;
