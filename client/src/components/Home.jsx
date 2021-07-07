import React from "react"
import {Link} from "react-router-dom"

function Home() {

    return (
        <div className="big-img">

            <div className="overlay">
                <h1 className="in">Operation Pathfinder</h1>

                <h2 className="typing-demo">watch your step</h2>

                <h3 className="enter">
                    <Link className="link" to="/phenomenon">
                        Enter
                    </Link>
                </h3>
            </div>

            {/* <h3>Unknown Entities</h3>

            <p>Unknown phenomenon are unexplained events that are of unknown origin or lack conventional explanation.</p>

            <p>A great many unknown or unexplained phenomenon have been recorded over the centuries.</p>

            <p>While the government has not formally released a list of recorded phenomenon to the public, a list does exist.</p> */}

        </div>
    )

}

export default Home