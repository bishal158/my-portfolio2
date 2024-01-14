import mentor_mind from "../assets/images/mentor_mind/mentor mind.jpg";
import web_talk from "../assets/images/web_talk/web talk.jpg";
import food_monkey from "../assets/images/food_monkey/food monkey.jpg";

// mentor-mind images

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import { mentor_mind_images } from "../assets/images/mentor_mind/mentor_mind_images.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Projects.css";
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
        link: "https://mentor-mind-seven.vercel.app/",
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
        link: "https://food-monkey.vercel.app/",
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
        link: "https://github.com/bishal158/WebTalk",
      },
      {
        id: 3,
        icon: "fa-solid fa-link-slash",
        link: "#",
      },
    ],
  },
];
const projects = [
  {
    id: "portfolio_1",
    name: "Mentor Mind",
    description: "",
    screenshots: mentor_mind_images,
    link: {
      github_url: "",
      live_url: "",
    },
    technologies: [
      {
        name: "Angular",
        image: "",
      },
      {
        name: "Asp.Net Core",
        image: "",
      },
    ],
  },
  {
    id: "portfolio_2",
    name: "Food Monkey",
    description: "",
    screenshots: mentor_mind_images,
    link: {
      github_url: "",
      live_url: "",
    },
    technologies: [
      {
        name: "Angular",
        image: "",
      },
      {
        name: "Asp.Net Core",
        image: "",
      },
    ],
  },
  {
    id: "portfolio_3",
    name: "Web Talk",
    description: "",
    screenshots: mentor_mind_images,
    link: {
      github_url: "",
      live_url: "",
    },
    technologies: [
      {
        name: "Angular",
        image: "",
      },
      {
        name: "Asp.Net Core",
        image: "",
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
                      target={"_parent"}
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
        <h1 className={"text-center mt-lg-5"}>Projects Details Section</h1>
        <div className={"container"}>
          {projects.map((project, index) => (
            <div
              className={"project_details_container"}
              id={project.id}
              key={index}
            >
              <h1>{project.name}</h1>
              <Swiper
                loop={true}
                navigation={true}
                modules={[Navigation, Thumbs]}
                grabCursor={true}
                className="product_images_slider"
              >
                {project.screenshots.map((screenshot) => (
                  <SwiperSlide key={screenshot.id}>
                    <img
                      src={screenshot.name}
                      className={"img-fluid"}
                      alt={"..."}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
