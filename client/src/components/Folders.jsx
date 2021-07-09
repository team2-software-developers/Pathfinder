import React from "react"
import {Link} from "react-router-dom"
import "./Folders.css"

function Folders() {

    return (
        <div>
            <div className="folders">
                <Link className="link" to="/">
                    <div className="folder item01"></div>
                    <p>Phenomenon Name</p>
                </Link>
           
                <Link className="link" to="/">
                    <div className="folder item02"></div>
                    <p>Phenomenon Name</p>
                </Link>
            </div>

            <div className="folders">
                <Link className="link" to="/">
                    <div className="folder item03"></div>
                    <p>Phenomenon Name</p>
                </Link>

                <Link className="link" to="/">
                    <div className="folder item04"></div>
                    <p>Phenomenon Name</p>
                </Link>
            </div>
        </div>
    )
}

export default Folders