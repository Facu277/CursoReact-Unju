import React from 'react'
import './characterstyle.css'
import { Link, NavLink} from 'react-router-dom';
/* export default class Character extends React.Component {
    constructor(props){
        super()
    }
    render(){
        return(
           
                <div className="card">
                    <div className="imgbx">
                        <img src={this.props.url} alt="" />
                    </div>
                    <div className="nombre">
                        <h3>{this.props.name}</h3>
                    </div>
                </div>
            
        );
    }
} */

export default function Character({url,name}) {
       return (
        <div className="card">
            <div className="imgbx">
                <img src={url} alt="" />
            </div>
            <div className="nombre">
                <h3>{name}</h3>
            </div>
        </div>
       )
}