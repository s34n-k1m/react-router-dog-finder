import { Link } from "react-router-dom";

/**DogList Component
 * 
 * Props:
 * - dogs: [{name, age, src, facts}, ...]
 * 
 * State: none
 * 
 * App -> Router /dogs -> DogList
 */
function DogList({ dogs }) {
  const dogsLinks = dogs.map((dog, i) => (
    <li key={i}>
      <Link to={`/dogs/${dog.name.toLowerCase()}`}>
        {dog.name}</Link></li>));

  return (
    <div className="DogList">
      <h2 className="DogList-title">List of Dogs</h2>
      <ul>
        {dogsLinks}
      </ul>
    </div>);
}

export default DogList;