import React, {useState} from 'react'
import email from "../img/email.svg";
import phone from "../img/phone.svg";

function Contact() {
    const [showPersonalDetails, setShowPersonalDetails] = useState(false)
    return (
        <header className="masthead">
            <div className="masthead_container">
                <div className="masthead_details">
                    <div className="personal_details">
                        <div className="personal_description">
                            <h2 className="name">Francois Jacquit</h2>
                            <p className="profession">Front-end developer</p>
                        </div>
                        <div className="personal_contact">
                            <a className="email_contact" href ="mailto:rak.hajasper@mail.com?">
                                <img src={email} alt="this is my email"/> Jacquit@gmail.com
                            </a>
                            <p className="phonenumber_contact">
                                <img src={phone} alt="this is my phone number"/> (+261) 344605298
                            </p>
                        </div>
                    </div> 
                    <p className="personal_motivation">
                        Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains.
                    </p>
                    <button className="read_more">Do you want to read more</button>
                </div>
            </div>
        </header>
    )
}

export default Contact