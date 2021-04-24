import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
// import NotFound from './NotFound'
import Contact from './Contact'
import Navbar from './Navbar'
import Services from './Services'
import About from './About'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

function AppRouter() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/about" component={About} />
                {/* <Route component={NotFound} /> */}
                <Redirect to="/" />
            </Switch>

            <Footer />
        </div>
    )
}

export default AppRouter
