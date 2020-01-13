import React, { useEffect } from 'react';
import MessageList from './messageList';
import MessageBar from './messageBar';
import { Redirect, NavLink, Route } from 'react-router-dom';
import Movies from './movies';
import Chat from './chat';
import { useSelector } from 'react-redux';
    
const Main = () => {

    const userLogged = useSelector(state => state.userLogged);

    if(!userLogged) {
        return <Redirect to ="/" />;
    }
    
    return (
        <div class="container-fluid">
            <div class="row flex-xl-nowrap">
                <div class="col-12 col-lg-2 p-0" style={{borderRight: "1px solid rgba(0, 0, 0, 0.1)"}}>
                    <div class="d-lg-block my-3 py-3 px-5 collapse sidebar show">
                        <div class="list-group list-group-flush">
                            <div class="card badge badge-secondary">
                                <div class="card-header bg-info text-white py-3" style={{fontSize:14}}>
                                    <span>Connected as : {userLogged.username}</span>
                                </div>
                            </div>
                            <div className="list-group">
                                <NavLink exact activeClassName="active" to="/main/movies">
                                    <button className="list-group-item list-group-item-action py-3" type="button">Movies</button></NavLink>
                                <NavLink exact activeClassName="active" to="/main/chat">
                                    <button className="list-group-item list-group-item-action py-3" type="button">Chat</button></NavLink>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-10">
                    <Route path="/main/movies" component={Movies} />
                    <Route path="/main/chat" component={Chat} />
                </div>
            </div>
        </div>
    )
}

export default Main