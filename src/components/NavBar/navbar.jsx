import React from 'react'
import { Link } from 'react-router-dom';
import './navstyle.css'
export default class Navbar extends React.Component {
    render(){
        return(
            <div className="div">
                <nav className="nav">
                    <p> <Link exact to="/">Logo</Link> </p>
                    <p> <Link exact to="/charDetail"> Character Detail </Link> </p>
                    <p> <Link exact to="/about">About</Link> </p>
                </nav>
            </div>
        );
    }
}