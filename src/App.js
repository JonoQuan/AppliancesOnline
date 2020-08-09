import React from 'react'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Results from './components/results/Results'
import Cart from './components/cart/Cart'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Returns from './components/returns/Returns'
import Checkout from './components/checkout/Checkout'
import Confirmation from './components/checkout/Confirmation'
import Success from './components/checkout/Success'
import { ThemeProvider } from '@material-ui/styles'
import Theme from './theme/Theme'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import { Provider } from 'react-redux'
import Store from './reducers/Store'


function App() {

  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Provider store={Store}>
          <Router>
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route path='/results/:query?' render={(routeProps) => (<Results {...routeProps} />)} />
            <Route path='/cart' component={Cart} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/returns' component={Returns} />
            <Route path='/checkout/:order?' render={(routeProps) => (<Checkout {...routeProps} />)} />
            <Route exact path='/confirm/:order?' render={(routeProps) => (<Confirmation {...routeProps} />)} />
            <Route exact path='/success/:order?' render={(routeProps) => (<Success {...routeProps} />)} />
            <Footer />
          </Router>
        </Provider>
      </ThemeProvider>
    </div>

  );
}

export default App;
