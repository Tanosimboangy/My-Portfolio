import React from 'react'
import jacquit from "../img/jacquit.jpg";

export default function Home() {
    return (
        <div className="container">
            <div className="home_wrapper">
                <img className="my_image" src={jacquit} alt="my_image"/>
                <div className="my_personal">
                    <h2 className="title">About me</h2>
                    <p className="parg1">My name is jacquit and I'm 23 years old. I'm a student from Madagascar, more specificaly at Onja.</p>
                    <p className="parg2">I'm writing this blog because I want to share with you some of the great points that I've encountered in my study. Also, I want to get any suggestion from you for the things I still need to improve on this website. So please have a great time to read this the contents.</p>
                </div>
            </div>
        </div>
    )
}
