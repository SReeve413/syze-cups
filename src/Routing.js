// importing tools
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Store from './store'
// Importing Actions

// importing Pages
import HomePage from './pages/Home'
import NotFoundPage from './pages/NotFound'
import SignUp from './pages/sign-up'
import Login from './pages/login'
import Product from './pages/product'
import Cart from './pages/cart'
import Payment from './pages/payment'
import ThankYou from './pages/thank-you'

Store.subscribe(() =>  {
    console.log(Store.getState());
})


export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/product" component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/payment" component={Payment} />
            <Route path="/thank-you" component={ThankYou} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
)
