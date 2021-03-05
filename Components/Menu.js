import React from 'react'

function Menu() {
    return (
        <div className="menu_container">
            <a className="blog" href="/blog">
                <h2 className="title">My Blog</h2>
                <p >Enjoy your time while reading this page.</p>
            </a>
            <a href="/contact">
                <h2>My contact</h2>
                <p>Enjoy your time while reading this page.</p>
            </a>
            <a href="/design">
                <h2>My design</h2>
                <p>Enjoy your time while reading this page.</p>
            </a>
        </div>
    )
}
export default Menu