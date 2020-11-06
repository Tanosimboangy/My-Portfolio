import React from "react";
import Navigation from "./navigation";
import FooterLinks from "./Footer_links";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <h3>To sumit up</h3>
                <p>To conclude all about this website, I would like to thank you for allocating some of your time to read through this page</p>
                <div>
                    <h4>More Inforamtion</h4>
                    <ul className="footer_moreInfo">
                        <li className="footer_naviagtion">
                            <Navigation />
                        </li>
                        <li className="footer_links">
                            <FooterLinks />
                        </li>
                        <ul>
                            <li>skdfjklsdfjlksdjf</li>
                            <li>
                                <ul>
                                    <li>;slkdflkjsdlfk</li>
                                    <li>s;dlfklksdflkjl</li>
                                </ul>
                            </li>
                        </ul>
                    </ul>
                </div>
                <ul className="last_footer_items">
                    <li>Created by Jacquit</li>
                    <li>© Jacquit, 2020. All rights reserved.</li>
                </ul>
            </div>
        </footer>
    )
}
