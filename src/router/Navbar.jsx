import React from 'react'
import '.././index.css'
import '.././App.css';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                <ul>
                    <NavLink activeClassName="navlink" style={{margin: 10}} to='/home'>Home</NavLink> |
                    <NavLink  activeClassName="navlink" style={{margin: 10}} exact to='/search'>Live Search</NavLink> | 
                    <NavLink  activeClassName="navlink" style={{margin: 10}} exact to='/user'>User</NavLink> | 
                    <NavLink activeClassName="navlink" style={{margin: 10}} exact  to='/user/Awais/Asghar'>Special User</NavLink>
                </ul>
                </header>
            </div>
        </div >
    )
}

export default Navbar
