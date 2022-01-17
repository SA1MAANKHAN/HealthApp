import React from 'react'

import "./home.styles.scss"

import {Link} from "react-router-dom"

function Home() {
    return (
        <div className="home">
 <h1>CareWare: Health App</h1>
            <h4>Punjabi University End Sem Project</h4>

            <div className="options">

                <Link to="/covidTracker"className="option" >
                    Covid Tracker
                </Link>
                <Link to ="/diseasePrediction" className="option">
                    Disease Predicter
                </Link>
                 <Link to ="/about" className="option">
                    About
                </Link>

            </div>
            
        </div>
    )
}

export default Home
