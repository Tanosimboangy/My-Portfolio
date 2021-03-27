import React from 'react';
import blog from '../img/blog.png';
import contact from '../img/contact.png';
import desing from '../img/desing.png';

function Menu() {
    return (
        <div className="menu_container">
            <div className="blog">
                <h2 className="title">My Blog</h2>
                <p className="parg">Should you want to read my blog, click here!.</p>
                <a href="/blog">My Blog</a>
                <img src={blog} alt="blog"/>
            </div>
            <div className="contact">
                <h2 className="title">My Contact</h2>
                <p className="parg">If you want to contanct me, click here!.</p>
                <a href="/contact">My Contact</a>
                <img src={contact} alt="contact"/>
            </div>
            <div className="design">
                <h2 className="title">My Designs</h2>
                <p className="parg">Do you want to see my designs, click here!.</p>
                <a href="/design">My Designs</a>
                <img src={desing} alt="desing"/>
            </div>
        </div>
    )
}
export default Menu