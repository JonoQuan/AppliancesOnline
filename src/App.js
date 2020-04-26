import React from 'react'
import Home from './components/home/Home'
import Results from './components/results/Results'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import { ThemeProvider } from '@material-ui/styles'
import Theme from './theme/Theme'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"


function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/results/:query?' render={(routeProps) => (<Results {...routeProps} />)} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Router>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
