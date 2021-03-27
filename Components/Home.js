import React from 'react';
import Menu from './Menu';
import jacquit from "../img/jacquit.jpg";

export default function Home() {
    return (
        <div className="container">
            <div className="home_wrapper">
                <div className="my_image">
                    <img src={jacquit} alt="my_image"/>
                </div>
                <div className="my_personal">
                    <h2 className="title">Hello world</h2>
                    <p className="parg1">My name is jacquit and I'm 23 years old. I'm a student from Madagascar. I am learning to be a proffessional front-end-developer.</p>
                    <p className="parg2">I'm very glad to share with you what I have learn. Have a great time to read this page.</p>
                </div>
            </div>
            <Menu/>
        </div>
    )
}
