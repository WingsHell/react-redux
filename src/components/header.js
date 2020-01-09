import React from 'react';
import './header.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';


const Header = () => {

    return(
        <Router>
            <nav className="navbar has-shadow navbar-expand navbar-dark bg-dark py-0 px-0 mb-0">
                <div className="container flex p-2">
                    <div className="navbar-text nav-left text-black">
                        <p className="nav-item" style={{marginTop:"revert"}}>React Redux Cours Ipssi</p>
                    </div>
                    <div className="row justify-content-md-right flex">
                        <div className="nav-right nav-menu">
                            <div className="nav-item pr-4">
                                <ul className="navbar-nav mr-auto pr-4">
                                    <li id="nav-movies" className="nav-item pr-4" >
                                        <Link to ="/">
                                            <button className="btn btn-light" type="button">Movies</button>
                                        </Link>
                                    </li>
                                    <li id="nav-movies" className="nav-item pr-4" >
                                        <span></span>
                                        <span></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="nav-right nav-menu">
                            <div className="nav-item">
                                <p className="control">
                                    <Link to="/login">
                                        <button className="btn btn-light is-primary is-outlined" type="button">Inscritpion</button>
                                    </Link>
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </nav>
        </Router>
        
    )
}

export default Header

