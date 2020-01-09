import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Chat from './components/chat';
import Movies from './components/movies';
import Header from './components/header';

const App = () => {

  //const logged = useSelector(state => state.user.logged);

    return (
          <Router>
          <Header />
            <Switch>
              <Route exact path="/" redirect="/login"/>
              <Route path="/login" component={Login}/>
              <Route path="/movies" component={Movies} />
              <Route path="/chat" component={Chat} />
            </Switch>
             
          </Router>
    )
}

export default App;