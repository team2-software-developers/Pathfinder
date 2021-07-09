import React, { useState } from "react"
import {Link} from "react-router-dom"
import "./Folders.css"
import {fetchInfo, fetchDataLocation} from '../utils'

function Folders() {
    const [data, setData] = useState()
    return (
        <div>
            <div className="folders">
                <button onClick={() => fetchInfo(setData)} className="link" to="/">
                    <div className="folder item01"></div>
                    <p>{data}</p>
                </button>
           
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