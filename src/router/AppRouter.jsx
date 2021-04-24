import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import LiveSearch from './LiveSearch'
import User from './User'
import UserParam from './UserParam'
import Error from './Error'
import '.././index.css'
import '.././App.css';
import Navbar from './Navbar'

const App = () => {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <Navbar />
                
                    <Switch>
                    <Route  exact path="/home" component={Home} />
                    <Route  exact path="/search" component={LiveSearch} />
                    <Route  exact path="/user" component={User} />
                    <Route  exact path="/user/:fname/:lname" component={UserParam} />
                    <Route component={Error} />
                    {/* <Redirect to="/Error" /> */}
                    </Switch>
                    
                </header>
            </div>
        </div>
    )
}

export default App