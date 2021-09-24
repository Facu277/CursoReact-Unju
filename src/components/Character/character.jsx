import React from 'react'
import './characterstyle.css'
export default class Navbar extends React.Component {
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
}