import "./styles/Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const frontend_skills = [
  {
    name: "HTML5",
    percentage: "90%",
    icon: "fa-brands fa-html5",
    bar: "html_bar",
    color: "#FF5225",
  },
  {
    name: "CSS3",
    percentage: "90%",
    icon: "fa-brands fa-css3",
    bar: "css_bar",
    color: "#0974BC",
  },
  {
    name: "JAVASCRIPT",
    percentage: "65%",
    icon: "fa-brands fa-js",
    bar: "javascript_bar",
    color: "#F3DD55",
  },
  {
    name: "PHP",
    percentage: "45%",
    icon: "fa-brands fa-php",
    bar: "php_bar",
    color: "#556096",
  },
  {
    name: "BOOTSTRAP",
    percentage: "90%",
    icon: "fa-brands fa-bootstrap",
    bar: "bootstrap_bar",
    color: "#8210F5",
  },
  {
    name: "REACT JS",
    percentage: "55%",
    icon: "fa-brands fa-react",
    bar: "react_bar",
    color: "#66DBFB",
  },
  {
    name: "ANGULAR",
    percentage: "55%",
    icon: "fa-brands fa-angular",
    bar: "angular_bar",
    color: "#D6032E",
  },
];
const backend_skills = [
  {
    name: "NODE JS",
    percentage: "30%",
    icon: "fa-brands fa-node",
    bar: "node_bar",
    color: "#75AB66",
  },
  {
    name: "MongoDB",
    percentage: "40%",
    icon: "fa-solid fa-database",
    bar: "mongo_bar",
    color: "#75AB66",
  },
  {
    name: "MySQL",
    percentage: "40%",
    icon: "fa-solid fa-database",
    bar: "mysql_bar",
    color: "#086690",
  },
  {
    name: "Git and Github",
    percentage: "50%",
    icon: "fa-brands fa-github",
    bar: "github_bar",
    color: "#086690",
  },

  //     086690
];
export const Skills = () => {
  return (
    <>
      <div className={"container mb-3"} id={"skill"}>
        <div className={"my_skill_title"}>
          <h2>
            My<span> skills</span>
            <span className={"skill_text"}>my stacks</span>
          </h2>
        </div>
        <div className={"skills"}>
          <div className={"row"}>
            <div className={"col-md-6"}>
              {frontend_skills.map((skills, index) => (
                <div className={"skill_item"} key={index}>
                  <p>
                    <span>
                      <FontAwesomeIcon
                        icon={skills.icon}
                        style={{ color: skills.color }}
                      />
                      {skills.name}
                    </span>
                    <span>{skills.percentage}</span>
                  </p>
                  <div className={"progress_bar"}>
                    <div
                      className={skills.bar}
                      style={{ backgroundColor: skills.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className={"col-md-6"}>
              {backend_skills.map((skills, index) => (
                <div className={"skill_item"} key={index}>
                  <p>
                    <span>
                      <FontAwesomeIcon
                        icon={skills.icon}
                        style={{ color: skills.color }}
                      />
                      {skills.name}
                    </span>
                    <span>{skills.percentage}</span>
                  </p>
                  <div className={"progress_bar"}>
                    <div
                      className={skills.bar}
                      style={{ backgroundColor: skills.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};
