import React from 'react'

function Menu() {
    return (
        <div className="menu_container">
            <div className="blog">
                <h2 className="title">My Blog</h2>
                <p className="parg">Should you want to read my blog, click here!.</p>
                <a href="/blog">My Blog</a>
            </div>
            <div className="contact">
                <h2 className="title">My Contact</h2>
                <p className="parg">If you want to contanct me, click here!.</p>
                <a href="/contact">My Contact</a>
            </div>
            <div className="design">
                <h2 className="title">My Designs</h2>
                <p className="parg">Do you want to see my designs, click here!.</p>
                <a href="/design">My Designs</a>
            </div>
        </div>
    )
}
export default Menu