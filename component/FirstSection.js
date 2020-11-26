import React from "react";
import { Link } from 'react-router-dom';

export default function FirstSection() {
    return (
        <section className="first_section">
            <div className="container">
                <div>
                    <Link to="/html">
                        <article className="html_article article_container">
                            <button className="html_article--heading">HTML</button>
                            <p className="html_article--paragraph">This will tell you more what I have done so far in HTML programming language.</p>
                        </article>
                    </Link>
                    <Link to="/css">
                        <article className="css_article article_container">
                            <button>CSS</button>
                            <p>CSS is a good language program to use to make your website beautiful.</p>
                        </article>
                    </Link>
                    {/* <Link to="/jsvanilla">
                        <article className="jsvanilla_article article_container">
                            
                        </article>
                    </Link>
                    <Link to="/react">
                        <article className="react_article article_container">

                        </article>
                    </Link> */}
                </div>
            </div>
        </section>
    )
}
