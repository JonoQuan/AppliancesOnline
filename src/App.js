import React from 'react'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Results from './components/results/Results'
import Cart from './components/cart/Cart'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Returns from './components/returns/Returns'
import { ThemeProvider } from '@material-ui/styles'
import Theme from './theme/Theme'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import CartContextProvider from './contexts/CartContext'



function App() {

  return (
    <div>
      <ThemeProvider theme={Theme}>
        <CartContextProvider>
          <Navbar />
          <Router>
            <Route exact path='/' component={Home} />
            <Route path='/results/:query?' render={(routeProps) => (<Results {...routeProps} />)} />
            <Route path='/cart' component={Cart} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/returns' component={Returns} />
          </Router>
          <Footer />
        </CartContextProvider>
      </ThemeProvider>
    </div>

  );
}

export default App;
