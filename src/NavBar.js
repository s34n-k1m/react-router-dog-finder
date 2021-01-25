import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ dogs }) {

  function renderLinks() {
    return dogs.map((dog, i) => (
      <NavLink exact key={i} to={`/dogs/${dog.name.toLowerCase()}`}>  {dog.name}  </NavLink>
    ));
  }

  return (
    <nav className="NavBar">
      <NavLink exact to="/dogs">home</NavLink>
      {renderLinks()}
    </nav>
  );

}

export default NavBar;