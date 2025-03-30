import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import Home from "./components/Home";
import OrderPizza from "./components/OrderPizza";
import Success from './components/Success';

function App() {  

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/orderpizza">
          <OrderPizza />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </>
  )
}

export default App
