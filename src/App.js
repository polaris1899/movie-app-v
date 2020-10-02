import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./router/Home";
import About from "./router/About";
import Favorite from "./router/Favorite";
import Detail from "./router/Detail";
import Sidenav from "./components/Sidenav";
import Navigation from "./components/Navigation";
import Nowplaying from "./router/Nowplaying";
import Uploaded from "./router/Uploaded";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Sidenav />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/favorite" component={Favorite} />
      <Route path="/movie/:id" component={Detail} />
      <Route path="/nowplaying" component={Nowplaying} />
      <Route path="/uploaded" component={Uploaded} />
    </HashRouter>
  )
}

export default App;