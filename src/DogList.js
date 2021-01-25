import { Link } from "react-router-dom";

/**DogList Component
 * 
 * Props:
 * - dogs: [{name, age, src, facts}, ...]
 * 
 * State: none
 * 
 * App -> Router -> DogList
 */
function DogList({ dogs }) {
  const dogsLinks = dogs.map(dog => (<li><Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link></li>));

  return (<div>
    <h2>List of Dogs</h2>
    <ul>
      {dogsLinks}
    </ul>
  </div>);
}

export default DogList;