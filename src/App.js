import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>

          <Route path='/' exact>
            <Main />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;