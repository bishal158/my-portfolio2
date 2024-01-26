import "./styles/About.css";
import profile from "../assets/images/profile.png";
import food_monkey from "../assets/images/food_monkey/food monkey.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from "../assets/Mafuj Ahmed Bishal.pdf";
import { Experience } from "./Experience.jsx";
import { Skills } from "./Skills.jsx";
import { Education } from "./Education.jsx";

export const About = () => {
  return (
    <>
      <div className={"about_container"}>
        <div className={"about_title"}>
          <h2>
            About <span>Me</span> <span className={"about_text"}>my stats</span>
          </h2>
        </div>
        {/*about me*/}
        <div className={"container mb-3"}>
          <div className={"row about_content"}>
            <div className={"col-md-6 about_me"}>
              <div className={"info"}>
                <p>
                  I am a passionate and driven Computer Science graduate from
                  Green University of Bangladesh, eager to launch my career as a
                  full-stack web developer. My academic journey has equipped me
                  with a strong foundation in software development principles,
                  programming languages including (C, PHP, JavaScript, HTML5,
                  CSS3 ), and web development technologies (React, Angular,
                  Bootstrap).
                </p>
                <p>
                  I am a highly motivated learner with a strong desire to
                  continuously improve my knowledge and skills. I am equally
                  adept at working independently and collaborating in a team
                  environment. I am a quick learner and can adapt to new
                  technologies quickly.
                </p>
                <p>
                  I am currently seeking a full-time internship opportunity to
                  gain practical experience in a professional setting. I am
                  confident that my skills and enthusiasm will be an asset to
                  your team. I am eager to learn from experienced professionals
                  and contribute meaningfully to your projects.
                </p>
              </div>
              <div className={"btn_container"}>
                <Link to={"/projects"} className={"main_btn"}>
                  <span className={"btn_text"}>My Projects</span>
                  <span className={"btn_icon"}>
                    <FontAwesomeIcon icon="fa-solid fa-folder-open" />
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
            <div className={"col-md-6 my_image"}>
              <div className={"h_shape"}></div>
              <div className={"image"}>
                <img src={profile} alt={".."} />
              </div>
            </div>
          </div>
          <hr />
        </div>
        {/*skills*/}
        <Skills />
        {/*experience*/}
        <Experience />
        {/*education*/}
        <Education />
      </div>
    </>
  );
};
