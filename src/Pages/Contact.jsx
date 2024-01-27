import "./styles/Contact.css";
import resume from "../assets/Mafuj Ahmed Bishal.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import { socials } from "./Home.jsx";
export const Contact = () => {
  const Locations = [
    {
      id: 1,
      name: "Location",
      address: "Mirpur 12, Dhaka",
      icon: "fa-solid fa-location-dot",
    },
    {
      id: 2,
      name: "Phone",
      address: "01798541625 or 01742357462",
      icon: "fa-solid fa-phone",
    },
    {
      id: 3,
      name: "Email",
      address: "afnanmafuj22@gmail.com",
      icon: "fa-solid fa-envelope",
    },
    {
      id: 4,
      name: "Language",
      address: "Bengali, English",
      icon: "fa-solid fa-globe",
    },
  ];
  const [state, handleSubmit] = useForm("mayrybjl");
  const success = () => {
    if (state.succeeded) {
      toast.success("Email Sent Successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <div className={"contact_page"}>
      <div className={"my_contact_title"}>
        <h2>
          Contact<span> Me</span>
          <span className={"contact_text"}>Ask Me Anything</span>
        </h2>
      </div>
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col-md-6 p-2"}>
            <form onSubmit={handleSubmit}>
              <input
                id="email"
                type="email"
                name="email"
                placeholder={"Email"}
              />
              <textarea
                id="message"
                name="message"
                placeholder={"Message"}
                rows="10"
              />
              <button
                type="submit"
                onClick={success}
                disabled={state.submitting}
              >
                Send
              </button>
            </form>
          </div>
          <div className={"col-md-6 p-1"}>
            <div className={"google_map"}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.682683746663!2d90.35061597604582!3d23.82988018571899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c138a4e06af9%3A0xfab24877265a9760!2sKazi%20Barir%20mor!5e0!3m2!1sen!2sbd!4v1704291465748!5m2!1sen!2sbd"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className={"contacts"}>
              {Locations.map((location) => (
                <p key={location.id}>
                  <span>
                    <FontAwesomeIcon icon={location.icon} className={"mx-2"} />
                    {location.name}
                  </span>
                  <span>: {location.address}</span>
                </p>
              ))}
            </div>
            <div className={"socials"}>
              {socials.map((social, index) => (
                <a
                  href={social.links}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    style={{ color: social.color }}
                  />
                </a>
              ))}
            </div>
            <div className={"CV"}>
              <a
                className={"main_btn"}
                href={resume}
                download="Mafuj Ahmed Bishal.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span className={"btn_text"}>Download CV </span>
                <span className={"btn_icon"}>
                  <FontAwesomeIcon icon="fa-solid fa-download" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
