import React from 'react'
import jacquit from "../img/jacquit.jpg";
import email from "../img/email.svg";
import phone from "../img/phone.svg";

function Masthead() {
    return (
        <header className="masthead_container">
            <div className="masthead_profile">
                <img src={jacquit} alt="This is my image"/>
            </div>
            <div className="masthead_details">
                <div className="personal_details">
                    <ul className="personal_description">
                        <li>
                            <h2>Francois Jacquit</h2>
                        </li>
                        <li>
                            <p>Front-end developer</p>
                        </li>
                    </ul>
                    <ul className="personal_contact">
                        <li className="email_contact">
                            <a href ="mailto:rak.hajasper@mail.com?">
                                <img src={email} alt="this is my email"/> Jacquit@gmail.com
                            </a>
                        </li>
                        <li className="phonenumber_contact">
                            <p>
                                <img src={phone} alt="this is my phone number"/> (+261) 344605298
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="personal_motivation"> 
                    <p>
                        Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains.
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Masthead
