import React, {useState} from "react";

export default function Header() {
    return (
		<header className="header">
			<div className="container">
				<div className="header_container">
					<h1 className="header_logo">Jacquit</h1>
					<svg xmlns="http://www.w3.org/2000/svg" height="30" fill="blue" viewBox="0 0 24 24" width="30"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
					<input className="open" type="checkbox"/>
					<nav className="header_navigation">
						<ul>
							<li className="header_navigation--home"><a className="header_navigation--home_link" href="/">Home</a></li>
							<li className="header_navigation--blog"><a className="header_navigation--blog_link" href="blog">Blog</a></li>
							<li className="header_navigation--contact"><a className="header_navigation--contact_link" href="/contact">Contact</a></li>
							<li className="header_navigation--design"><a className="header_navigation--design_link" href="/design">Design</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
    )
}
