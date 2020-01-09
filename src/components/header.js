import React from 'react';
import './header.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from '../App';
import Login from '../components/login';
import Chat from '../components/chat';
import { Provider } from 'react-redux'
import store from '../redux/store/store';

const Header = () => {

    return(
        <Router>
            <nav className="navbar has-shadow navbar-expand navbar-dark bg-dark py-0 px-0 mb-0">
                <div className="container flex p-2">
                    <div className="navbar-text nav-left text-black">
                        <p className="nav-item">React Redux Cours Ipssi</p>
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
                            <div className="nav-item pr-4">
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
            <Provider store={store}>
                <div className="container-fluid">
                    
                        <Route exact path="/" component={App} />
                        <Route path="/inscription" component={Login} />
                        <Route path="/chat" component={Chat} />
                    
                </div>
            </Provider>
        </Router>
        
    )
}

export default Header

