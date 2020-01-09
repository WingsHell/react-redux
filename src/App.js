import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies';
import Login from './components/login';
import Header from './containers/Header';
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
        <div className="container-fluid">
          <Login></Login>
        </div>
      </Provider>
      
    )
  }
  // render() {
  //   return (
  //     <Provider store={store}>
  //       <Header></Header>
  //     </Provider>
      
  //   )
  // }

}

export default App;
