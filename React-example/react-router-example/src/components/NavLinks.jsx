import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { NavLink } from "react-router-dom";

const activeStyle = { color: "green" };

export default function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink to="/" exact activeStyle={activeStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/profile/1" activeStyle={activeStyle}>
          Profile/1
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          activeStyle={activeStyle}
          isActive={(match, location) => {
            console.log(match, location);
            return location.search === "";
          }}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/about?name=mark">About?name=mark</NavLink>
      </li>
    </ul>
  );
}
