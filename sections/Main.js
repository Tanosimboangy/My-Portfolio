import React from 'react'
import Masthead from "../Components/Masthead";
import Demo from "../Components/Demo";

function Main() {
    return (
        <main className="main">
            <Masthead />
            <div className="demo_section">
                <Demo />
            </div>
        </main>
    )
}

export default Main
