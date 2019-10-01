import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import Orders from './Orders'
import FullOrder from './Full'
import { Route, Link, Switch, Redirect } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <nav>
          <ul>
            <li><Link to="/">Orders</Link></li>
            <li><Link to="/new-order">Make a new order!</Link></li>
          </ul>
        </nav>
        <Switch>
        <Route path="/orders" exact component={Orders} />
        <Route path="/new-order" exact component={Form} />
        <Route path= "/orders/:id" exact component={FullOrder}/>
        <Redirect to="/orders"/>
        </Switch>

      </div>

    )
  }
}
export default App;
