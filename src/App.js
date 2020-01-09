import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Chat from './components/chat';
import Movies from './components/movies';
import Header from './components/header';
import { Provider } from 'react-redux'
import store from './redux/store/store';
class App extends Component {
 
  state = {
    movies: []
  }

  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Header />
            <Router>
              <Route exact path="/" component={Login} />
              <Route path="/movies" component={Movies} />
              <Route path="/chat" component={Chat} />
            </Router>
      </Provider>
      
    )
  }
}

export default App;
