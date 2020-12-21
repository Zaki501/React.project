import React from 'react'
import logo from '../logo.svg'

class Navbar extends React.Component {
    render() {
        return(
        <header>
            <nav>
                <img src={logo} alt="Logo"></img>
                <a href="">Home</a> 
                <a href="">About</a> 
                <a href="">Services</a> 
                <a href="">Contact</a> 
            </nav>
        </header>
        )
    }
}

export default Navbar