import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from './../redux/actions/user';


const Header = () => {

    const logged = useSelector(state => state.user.logged);
    const username = useSelector(state => state.user.username);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username) {
            dispatch(logoutUser(username));
        }
    }

    return(
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
                                        <NavLink activeClassName="active" to="/movies">
                                            <button className="btn btn-light" type="button">Movies</button>
                                        </NavLink>
                                    </li>
                                    <li id="nav-movies" className="nav-item pr-4" >
                                        <span></span>
                                        <span></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="nav-right nav-menu">
                            <div className="nav-item"> {
                                !logged ?   <ul className="navbar-nav mr-auto pr-4">
                                                <li id="nav-login" className="nav-item pr-4" >
                                                    <NavLink exact activeClassName="active" to="/login">
                                                        <button className="btn btn-light is-primary is-outlined" type="button">Inscritpion</button></NavLink>
                                                </li>
                                            </ul>
                                    :   <ul className="navbar-nav mr-auto pr-4">
                                            <li id="nav-login" className="nav-item pr-4" >
                                                <NavLink exact activeClassName="active" to="/chat">
                                                        <button className="btn btn-light is-primary is-outlined" type="button">Chat</button></NavLink>
                                            </li>
                                            <li id="nav-chat" className="nav-item pr-4" >
                                                <button className="btn btn-light is-primary is-outlined" onClick={handleSubmit} type="submit">Logout</button>
                                            </li>
                                        </ul>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
    )
}

export default Header

