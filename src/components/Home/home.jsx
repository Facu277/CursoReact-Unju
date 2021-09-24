import React from 'react'
import Card from '../Character/character.jsx'
import anime from '../../json/personaje.json'
import './home.css'
export default class Navbar extends React.Component {
    constructor(props){
        super()
    }
    render(){
        return(
           
            <div className="kome">
            {anime.Characters.map((element) => (
              <Card
                name={element.name}
                url={element.photo}
              />
            ))}
          </div>
            
        );
    }
}