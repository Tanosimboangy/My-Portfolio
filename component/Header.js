import React from "react";

export default function Header() {
    return (
        <>
			<header className="header_container">
				<h1 className="header_logo"><a href="./jacquit">My Own Website</a></h1>
				<input type="checkbox" />
				<nav className="header_navigation">
					<ul>
						<li className="header_navigation--contact">
							<a className="header_navigation--contact_link" href="/contact">contact</a>
						</li>
						<li className="header_navigation--portfolio">
							<a className="header_navigation--portfolio_link" href="portfolio">portfolio</a>
						</li>
						<li className="header_navigation--blog">
							<a className="header_navigation--blog_link" href="blog">Blog</a>
						</li>
					</ul>
				</nav>
			</header>
        </>
    )
}
