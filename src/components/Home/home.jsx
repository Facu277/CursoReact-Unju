import React from 'react'
import Card from '../Character/character.jsx'
import { Link, NavLink} from 'react-router-dom';
import anime from '../../json/personaje.json'
import { useParams } from "react-router";
import './home.css'
export default class Navbar extends React.Component {
    constructor(props){
        super()
    }
    render(){
        return(
           
            <div className="kome">
              {anime.Characters.map((element) => (
              <NavLink to={`/charDetail/${element.id}`}>
                <Card
                  name={element.name}
                  url={element.photo}
                />
              </NavLink>
            ))}
          </div>
            
        );
    }
}


/* export default function Homes(props){
  return(
    <div className="me">
      <Link to={`/charDetail/${props.key}`}>
            <Card
              name={props.nick}
              url={props.url}
            />
      </Link>
    </div>
  )
} */