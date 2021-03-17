import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homepage from './Pages/Homepage'


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path='/' component={ Homepage } />
          </Switch>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
