import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./components/Home"
import Phenomenon from "./components/Phenomenon"
import About from "./components/About"
import "./App.css"



function App() {
  return (
    <Router>

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/phenomenon">
        <Phenomenon />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      
    </Router>
  )
}

export default App;
