import React from "react";
import Navigation from "./navigation";

export default function Header() {
    return (
		<header className="header">
			<div className="container">
				<div className="header_container">
					<h2 className="header_logo"><a href="./jacquit">My Protfolio</a></h2>
					<svg xmlns="http://www.w3.org/2000/svg" height="30" fill="white" viewBox="0 0 24 24" width="30"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
					<input type="checkbox" />
					<Navigation />
				</div>
			</div>
		</header>
    )
}
