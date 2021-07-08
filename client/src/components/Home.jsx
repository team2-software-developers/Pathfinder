import React from "react"
import {Link} from "react-router-dom"
import "./Home.css"

function Home() {

    return (
        <div className="big-img">
            <div className="overlay">
                <h1 className="fadeIn">Operation Pathfinder</h1>

                <h2 className="watch">watch your step</h2>

                <h3 className="enter">
                    <Link className="link" to="/phenomenon">
                        Enter
                    </Link>
                </h3>

                <footer>
                    <Link className="link" to="/about">
                        About
                    </Link>
                </footer>
            </div>
        </div>
    )
}

export default Home