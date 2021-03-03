import React from 'react'
import jacquit from "../img/jacquit.jpg";
import email from "../img/email.svg";
import phone from "../img/phone.svg";

function Blog() {
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
                    <p className="personal_motivation--text">
                        Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains.
                    </p>
                </div>
                <button className="read_more">Do you want to read more</button>
                {/* <div>
                    <div>
                        <p>
                            My name is jacquit and I'm 23 years old. I'm a student from Madagascar, more specificaly at Onja. I'm writing this blog because I want to share to you some of the great points that I've encountered in my study. Also, I want to get any suggestion from you for the things I still need to improve on this blog. So please have a great time to read this blog.
                        </p>
                        <div>
                            <h2>About ONJA</h2>
                            <p>
                                I'm studying at ONJA school, which is a NGO lead by SAM and located in Mahanoro. We are twenty students at ONJA, to learn english and coding with seven staff. This organisation is based on supporting the students who can't go to university but still want to study. We studyed english last year up to now, but this year we focus more on coding.
                            </p>
                        </div>
                        <div>
                            <h2>At the beginning of my study</h2>
                            <p>
                                Generally, I really love studying, because I want to learn many things. As far as I'm concerned, study assists me to have a better life in the future as many students want. That's what I'm doing now. However, at the beginning, I found it really hard to get started of my study at onja and to get use to it, but in fact working hard pushed me to get over that. That's why, I admit that nothing is easy on earth without trying hard. Apart from that, I had to change many things in my life, including the way of studying. Moreover, I needed to dicsipline myself and set up a new method of managing time so that I can use my time wisely.
                            </p>
                        </div>
                        <div>
                            <h2>At the moment</h2>
                            <p>
                                At this time, my study is getting better. Thanks to all sophisticated staff at ONJA, because without them I would never be on this stage now.
                            </p>
                        </div>
                        <p>Thank you very much for devoting yourself to reading my blog.</p>
                    </div>
                </div> */}
            </div>
        </header>
    )
}

export default Blog