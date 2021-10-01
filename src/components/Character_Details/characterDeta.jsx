
import React, { useState } from 'react';
import { useParams } from 'react-router';
import "./detallesstyle.css"; 
export default function Detail(props) {
  const onepunch=props.onepunch
  console.log(onepunch)



  const [state, setState] = useState({
    currentElement: onepunch[0] = {
      id:onepunch.id,
      name:onepunch.name,
      edad:onepunch.age,
      photo:onepunch.photo,
      ciudad:onepunch.ciudad,rango:onepunch.rango,asociacion:onepunch.asociacion
    }
  })



  const onChangeInput=(event) => {
    setState(()=>{
      return {
        currentElement: onepunch.find((element) => element.id == event.target.value)
      }
    })
  }

  return (
    <div className="container">
      <select onChange={(event) => {onChangeInput(event)}}>



        {onepunch.map((element)=> (
          <option value={element.id}>
            {element.name}
          </option>
        ))}
      </select>

      <div className="container">
          <h3>
            {state.currentElement.name}
          </h3>
          <div>
            <img src={state.currentElement.photo}></img>
          </div>
          <h3> Character Details</h3>
          <p> Edad: {state.currentElement.edad + " años"}</p>
          <p> Ciudad: {state.currentElement.ciudad}</p>
          <p>Rango: {state.currentElement.rango}</p>
          <p>Asociacion: {state.currentElement.asociacion}</p>
        </div>

    </div>
  );
}