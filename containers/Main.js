import React from 'react'
import { Route, Switch } from 'react-router'
import Contact from "../Components/Contact";
import Blog from "../Components/Blog";
import Demo from "../Components/Demo";
import Home from "../Components/home";

function Main() {
    return (
        <main className="main">
            <div className="main_container">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/blog">
                        <Blog />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/design">
                        <Demo />
                    </Route>
                </Switch>
            </div>
        </main>
    )
}

export default Main
