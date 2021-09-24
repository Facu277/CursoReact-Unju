import React from 'react'
import './navstyle.css'
export default class Navbar extends React.Component {
    render(){
        return(
            <div className="div">
                <nav className="nav">
                    <a href="">Logo</a>
                    <a href="">Character Detail</a>
                    <a href="">About</a>
                </nav>
            </div>
        );
    }
}