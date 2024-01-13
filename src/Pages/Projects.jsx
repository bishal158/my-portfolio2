import mentor_mind from "../assets/images/mentor_mind/mentor mind.jpg";
import web_talk from "../assets/images/web_talk/web talk.jpg";
import food_monkey from "../assets/images/food_monkey/food monkey.jpg";
import "./styles/Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const portfolios = [
  {
    name: "Mentor Mind",
    image: mentor_mind,
    socials: [
      {
        id: 1,
        icon: "fa-solid fa-eye",
        link: "#portfolio_1",
      },
      {
        id: 2,
        icon: "fa-brands fa-github",
        link: "https://github.com/bishal158/Mentor-Mind",
      },
      {
        id: 3,
        icon: "fa-solid fa-link-slash",
        link: "https://",
      },
    ],
  },
  {
    name: "Food Monkey",
    image: food_monkey,
    socials: [
      {
        id: 1,
        icon: "fa-solid fa-eye",
        link: "#portfolio_2",
      },
      {
        id: 2,
        icon: "fa-brands fa-github",
        link: "https://github.com/bishal158/Food-Monkey",
      },
      {
        id: 3,
        icon: "fa-solid fa-link-slash",
        link: "https://",
      },
    ],
  },
  {
    name: "Web Talk",
    image: web_talk,
    socials: [
      {
        id: 1,
        icon: "fa-solid fa-eye",
        link: "#portfolio_3",
      },
      {
        id: 2,
        icon: "fa-brands fa-github",
        link: "https://",
      },
      {
        id: 3,
        icon: "fa-solid fa-link-slash",
        link: "https://",
      },
    ],
  },
];
export const Projects = () => {
  return (
    <>
      <div className={"projects_container"}>
        <div className={"projects_title"}>
          <h2>
            My <span>Projects</span>
            <span className={"project_text"}>Personal</span>
          </h2>
        </div>
        <h2>
          Here are some of my works that i have worked on academic a period with
          various frameworks.
        </h2>
        <div className={"container portfolios"}>
          {portfolios.map((portfolio, index) => (
            <div className={"portfolios_item"} key={index}>
              <div className={"images"}>
                <img src={portfolio.image} alt={"..."} />
              </div>
              <div className={"hover_item"}>
                <h3>{portfolio.name}</h3>
                <div className={"social_links"}>
                  {portfolio.socials.map((social) => (
                    <a
                      key={social.id}
                      href={social.link}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={"container"}></div>
      </div>
    </>
  );
};
