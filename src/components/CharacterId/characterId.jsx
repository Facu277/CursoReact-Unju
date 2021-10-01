import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import anime from '../../json/personaje.json'
export default function Detail(){
    const {id} = useParams()

    const [charactersInfo, setCharacters]=useState([])
  useEffect(()=>{
    obtenerDatos()
    }, [id])


  const obtenerDatos= async () => {
    /* const data = await fetch(anime) */
    const characters = anime
    setCharacters(characters.Characters)
  }

  console.log(charactersInfo)

    return(
      <div className="container">
          <h3>
            {charactersInfo.name}
          </h3>
          <div>
            <img src={charactersInfo.photo}></img>
          </div>
          <h3> Character Details</h3>
          <p> Edad: {charactersInfo.edad + " años"}</p>
          <p> Ciudad: {charactersInfo.ciudad}</p>
          <p>Rango: {charactersInfo.rango}</p>
          <p>Asociacion: {charactersInfo.asociacion}</p>
        </div>
    )
}