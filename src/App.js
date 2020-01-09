import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Chat from './components/chat';
import Movies from './components/movies';
import Header from './components/header';
import { useSelector } from 'react-redux';

const App = () => {

  const logged = useSelector(state => state.user.logged);

    return (
          <Router>
          <Header />
            <Switch>
              <Route exact path="/">{
                <Redirect to="/login" />
              }
              </Route>
              <Route path="/login">{
                  logged ? <Redirect to="/chat" /> : <Login />
                }
              </Route>
              <Route path="/movies" component={Movies} />
              <Route path="/chat" component={Chat} />
            </Switch>
             
          </Router>
    )
}

export default App;