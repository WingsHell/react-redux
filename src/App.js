import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Main from './components/main';
import Movies from './components/movies';
import Header from './components/header';
import { useSelector } from 'react-redux';
import 'moment-timezone';

const App = () => {

  const logged = useSelector(state => state.userLogged.logged);

    return (
          <Router>
          <Header />
            <Switch>
              <Route exact path="/">{
                <Redirect to="/login" />
              }
              </Route>
              <Route path="/login">{
                  logged ? <Redirect to="/main/chat" /> : <Login />
                }
              </Route>
              <Route path="/main" component={Main} />
              <Route path="/movies" component={Movies} />
            </Switch>
             
          </Router>
    )
}

export default App;