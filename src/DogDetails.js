import React from "react";
import {useParams} from "react-router-dom";

/*DogDetails Component
*
* Props: 
* - dogs: [{name, age, src, facts}, ...]
*
* State: none
*
* App -> Router -> DogDetails
*/
function DogDetails({dogs}) {
  const { name } = useParams();

  const currDog = dogs.find(d => d.name.toLowerCase() === name);  
  
  return (
  <div>
    <h2>{currDog.name}</h2>
    <img src={currDog.src} alt={currDog.name}></img>
    <div>Age: {currDog.age}</div>
    <ul>
      {currDog.facts.map((fact, i) => (<li key={i}>{fact}</li>))}
    </ul>
  </div>);
}

export default DogDetails;