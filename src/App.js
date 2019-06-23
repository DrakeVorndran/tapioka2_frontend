import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import NewPost from './pages/NewPost'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/posts/new' component={NewPost} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
