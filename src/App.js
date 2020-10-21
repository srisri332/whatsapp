import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='App'>
      {!user ? (
        <Login />
      ) : (
        <Router>
          <Switch>
            <div className='app__body'>
              <Sidebar />
              <Route path='/rooms/:roomId'>
                <Chat />
              </Route>
              <Route path='/' exact>
                <h1>Slash route</h1>
              </Route>
            </div>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
