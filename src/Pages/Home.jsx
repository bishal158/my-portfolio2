import "./styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../assets/images/PXL_20240111_052131855.MP.png";
import resume from "../assets/Mafuj Ahmed Bishal.pdf";

import { Link } from "react-router-dom";
const info =
  "A passionate frontend developer from Bangladesh.I am always eager to learn new technologies and I am always up for a challenge. I am confident that I can quickly learn and adapt to new technologies. I am confident and passionate about frontend development and looking for a challenging opportunity so that i can learn and build a healthy career on web development.";
const name = "Mafuj Ahmed Bishal";
export const socials = [
  {
    links: "https://www.facebook.com/mafuj.bishal.9",
    icon: "fa-brands fa-facebook",
    color: "#316FF6",
  },
  {
    links: "https://www.linkedin.com/in/mafuj-ahmed-bishal/",
    icon: "fa-brands fa-linkedin",
    color: "#0077b5",
  },
  {
    links: "https://www.instagram.com/mafujbishal/",
    icon: "fa-brands fa-instagram",
    color: "#fccc63",
  },
  {
    links: "https://twitter.com/BishalMafuj",
    icon: "fa-brands fa-twitter",
    color: "#1DA1F2",
  },
  {
    links: "https://github.com/bishal158",
    icon: "fa-brands fa-github",
    color: "#4078c0",
  },
];
const contacts = [
  {
    contact_info: "+880 1798541625",
    contact_icon: "fa-solid fa-phone-volume",
  },
  {
    contact_info: "+880 1798541625",
    contact_icon: "fa-solid fa-phone-volume",
  },
  {
    contact_info: "afnanmafuj22@gmail.com",
    contact_icon: "fa-solid fa-envelope",
  },
];
const Home = () => {
  return (
    <div className={"hero_container"}>
      <div className={"logo_and_social"}>
        <div className={"logo"}>{name}</div>
        <div className={"social"}>
          {socials.map((social, index) => (
            <a href={social.links} target="_blank" rel="noreferrer" key={index}>
              <FontAwesomeIcon
                icon={social.icon}
                style={{ color: social.color }}
              />
            </a>
          ))}
        </div>
      </div>
      <div className={"container-fluid"}>
        <div className={"row header_content"}>
          <div className={"col-md-6 left_header"}>
            <div className={"h_shape"}></div>
            <div className={"image"}>
              <img src={profile} alt={".."} />
            </div>
          </div>
          <div className={"col-md-6 right_header"}>
            <h3>Hello I am,</h3>
            <h1>{name}</h1>
            <p>{info}</p>
            <h6>Contact Me:</h6>
            <div className={"contact_info"}>
              {contacts.map((contact, index) => (
                <p key={index}>
                  <FontAwesomeIcon icon={contact.contact_icon} />{" "}
                  {contact.contact_info}
                </p>
              ))}
            </div>
            <div className={"btn_container"}>
              <Link to={"/about"} className={"main_btn"}>
                <span className={"btn_text"}>About Me !!!</span>
                <span className={"btn_icon"}>
                  <FontAwesomeIcon icon="fa-solid fa-user" />
                </span>
              </Link>
              <a
                className={"main_btn"}
                href={resume}
                download="Mafuj Ahmed Bishal.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span className={"btn_text"}>Download CV</span>
                <span className={"btn_icon"}>
                  <FontAwesomeIcon icon="fa-solid fa-download" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
