import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Testimonials from './views/testimonials'
import Contact from './views/contact'
import Home from './views/home'
import InTheNews from './views/in-the-news'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Testimonials} exact path="/testimonials" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Home} exact path="/" />
        <Route component={InTheNews} exact path="/in-the-news" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
