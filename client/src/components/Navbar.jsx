import React from "react"
import {Link} from "react-router-dom"
import "./Navbar.css"

function Navbar() {

    return (

        <nav className="navbar">

            <h1><Link className="link nav_item" to="/">Home</Link></h1>

            <h1><Link className="link nav_item" to="/phenomenon">Phenomenon</Link></h1>

            <h1><Link className="link nav_item" to="/about">About</Link></h1>

        </nav>
    )
}

export default Navbar