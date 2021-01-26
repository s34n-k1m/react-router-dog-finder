import React from "react";
import { useParams, Redirect } from "react-router-dom";

/*DogDetails Component
*
* Props: 
* - dogs: [{name, age, src, facts}, ...]
*
* State: none
*
* App -> Router /dogs/:name -> DogDetails
*/
function DogDetails({ dogs }) {
  const { name } = useParams();

  const currDog = dogs.find(d => d.name.toLowerCase() === name);

  if (!currDog) return <Redirect to="/dogs" />;

  return (
    <div className="DogDetails">
      <h2 className="DogDetails-title">{currDog.name}</h2>
      <img src={currDog.src} alt={currDog.name}></img>
      <div>Age: {currDog.age}</div>
      <ul>
        {currDog.facts.map((fact, i) => (<li key={i}>{fact}</li>))}
      </ul>
    </div>);
}

export default DogDetails;