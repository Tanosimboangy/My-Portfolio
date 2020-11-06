import React from "react";
import twitter from "../img/twitter.svg";
import mail from "../img/mail.svg";
import facebook from "../img/facebook.svg";
import instagram from "../img/instagram.svg";

export default function Footer_links() {
    return (
        <>
            <ul>
                <li>
                    <a href="http://facebook.com">
                        <img src={facebook} />
                    </a>
                </li>
                <li>
                    <a href ="mailto:rak.hajasper@mail.com?">
                        <img src={mail} />
                    </a>
                </li>
                <li>
                    <a href="http://twitter.com">
                        <img src={twitter} />
                    </a>
                </li>
                <li>
                    <a href="http://instagram.com">
                        <img src={instagram} />
                    </a>
                </li>
            </ul>
        </>
    )
}
