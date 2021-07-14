import React, { useState } from "react";
import { Link, useLocation, withRouter } from "react-router-dom";

function Navigation(props) {
    /* TODO: change isAuthenticated state change into a more elaborate cookies method
            so that the user doesn't get logged out when they refresh */
    const [isAuthenticated, setAuthentication] = useState(false);
    const [location, setLocation] = useState(useLocation());

    return (
        <div className="navigation">
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Outfitter</a>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class={`nav-item  ${
                                props.location.pathname === "/" ? "active" : ""
                            }`}>
                                <a class="nav-link " aria-current="page" href="/">Home</a>
                            </li>
                            <li class={`nav-item  ${
                                props.location.pathname === "/closet" ? "active" : ""
                            }`}>
                                <a class="nav-link" href="/closet">View My Closet</a>
                            </li>
                            <li class={`nav-item  ${
                                props.location.pathname === "/new-outfit" ? "active" : ""
                            }`}>
                                <a class="nav-link" href="/new-outfit">Add New Outfit</a>
                            </li>
                        </ul>
                        <span class="navbar-text">
                            username_here
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);
