import React, { useState } from "react";
import { Link, useLocation, withRouter } from "react-router-dom";

function Navigation(props) {
    /* TODO: change isAuthenticated state change into a more elaborate cookies method
            so that the user doesn't get logged out when they refresh */
    const [isAuthenticated, setAuthentication] = useState(false);
    const [location, setLocation] = useState(useLocation());

    return (
        <div className="navigation">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Outfitter</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/closet">
                                    My Closet
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/new-outfit">
                                    Create New Outfit
                                </Link>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            username_here
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);
