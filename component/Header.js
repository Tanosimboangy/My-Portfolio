import React from "react";

export default function Header() {
    return (
        <>
            <header className="header">
                <h1 className="top_heading">
                    <img src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Small.png" width="50px" />
                    <a className="top_heading--link" href="my_own_blog">My Own website</a>
                </h1>
                <nav className="navigation_container">
                    <ul>
                        <li className="navigation_contact">
                            <a href="./Info">Info</a>
                        </li>
                        <li className="navigation_blog">
                            <a href="./blog">Blog</a>
                        </li>
                        <li className="navigation_contact">
                            <a href="./contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
