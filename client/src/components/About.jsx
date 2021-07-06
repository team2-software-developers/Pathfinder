import React from "react"

function About() {

    return (
        <div className="container">
            <h1>Who we are</h1>

            <div>
                <a className="name" href="https://github.com/FernandaRicciardi" target="_blank" rel="noreferrer">Fernanda Ricciardi</a>
            </div>

            <div>
                <a className="name" href="https://github.com/Minakrv" target="_blank" rel="noreferrer">Mina Khosravi</a>
            </div>

            <div>
                <a className="name" href="https://github.com/paulamal21" target="_blank" rel="noreferrer">Paula Malkinska</a>
            </div>

            <div>
                <a className="name" href="https://github.com/RomanHyde" target="_blank" rel="noreferrer">Roman Hyde</a>
            </div>

            <hr />

            <h1>The project</h1>

            <p>
                Pathfinder is a project created collaboratively during the 10th week of Code Nation's Master Course. It is based on some mysterious phenomenon that has happened throughout history.
            </p>

            <hr />

            <h2>Dependancies used</h2>
            
            <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Nodemon</li>
                <li>MongoDB</li>
            </ul>


        </div>
    )

}

export default About