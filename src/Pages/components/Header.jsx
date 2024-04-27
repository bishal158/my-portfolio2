import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Header.css";
const routes = [
  {
    to: "/",
    icon: "fa-solid fa-house",
  },
  {
    to: "about",
    icon: "fa-solid fa-user",
  },
  {
    to: "projects",
    icon: "fa-solid fa-folder-open",
  },
  {
    to: "contact",
    icon: "fa-solid fa-address-book",
  },
];
export const Header = () => {
  return (
    <div className={"header"}>
      {routes.map((route, index) => (
        <NavLink className={"nav-link"} to={route.to} key={index}>
          <FontAwesomeIcon icon={route.icon} />
        </NavLink>
      ))}
    </div>
  );
};
