import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import "./styles/Header.css";
const routes = [
  {
    to: "/",
    icon: "fa-solid fa-house",
  },
  {
    to: "about",
    icon: "fa-solid fa-info",
  },
  {
    to: "education",
    icon: "fa-solid fa-user-graduate",
  },
  {
    to: "experience",
    icon: "fa-solid fa-briefcase",
  },
  {
    to: "skills",
    icon: "fa-solid fa-brain",
  },
  {
    to: "projects",
    icon: "fa-solid fa-file",
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
