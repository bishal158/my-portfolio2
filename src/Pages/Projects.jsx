import mentor_mind from "../assets/images/mentor_mind/mentor mind.jpg";
import web_talk from "../assets/images/web_talk/web talk.jpg";
import todo_app from "../assets/images/todo_app/todo app.png";
import food_monkey from "../assets/images/food_monkey/food monkey.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";
import {
  food_monkey_images,
  food_monkey_technologies,
  mentor_mind_images,
  mentor_mind_technologies,
  web_talk_images,
  web_talk_technologies,
} from "../assets/images/projects_screenshots.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/Projects.css";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
const portfolios = [
  {
    name: "Mentor Mind",
    image: mentor_mind,
    socials: [
      {
        id: 1,
        icon: "fa-solid fa-eye",
        link: "#project_1",
      },
      {
        id: 2,
        icon: "fa-brands fa-github",
        link: "https://github.com/bishal158/MentorMind",
      },
      {
        id: 3,
        icon: "fa-solid fa-link-slash",
        link: "https://mentor-mind-public.vercel.app",
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
        link: "#project_2",
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
        link: "#project_3",
      },
      {
        id: 2,
        icon: "fa-brands fa-github",
        link: "https://github.com/bishal158/WebTalk",
      },
      {
        id: 3,
        icon: "fa-solid fa-link-slash",
        link: "https://web-talk-three.vercel.app/",
      },
    ],
  },

  {
    name: "Todo App",
    image: todo_app,
    socials: [
      {
        id: 1,
        icon: "fa-solid fa-eye",
        link: "#project_4",
      },
      {
        id: 2,
        icon: "fa-brands fa-github",
        link: "https://github.com/bishal158/Todo-App",
      },
      {
        id: 3,
        icon: "fa-solid fa-link-slash",
        link: "https://todo-app-xi-orpin.vercel.app/",
      },
    ],
  },
];
const projects = [
  {
    id: "project_1",
    no: "Project 1",
    name: "Mentor Mind",
    description:
      "This project is my university final project. This project is focus on university mentor-ships programme to bring mentor and mentees in one platform and make bridge between them.",
    screenshots: mentor_mind_images,
    links: [
      {
        id: 1,
        name: "GitHub",
        url: "https://github.com/bishal158/MentorMind",
      },
      {
        id: 1,
        name: "Live",
        url: "https://mentor-mind-public.vercel.app/",
      },
    ],
    technologies: mentor_mind_technologies,
  },
  {
    id: "project_2",
    no: "Project 2",
    name: "Food Monkey",
    description:
      "A Full-Stack online food ordering application built with MERN Stack..It built for specific restaurant.It allows users to create their own accounts, order food, see food details, rate a food, add food to cart cancel a order etc. Provide services like Dine in, Pick-up, Home Delivery etc.",
    screenshots: food_monkey_images,
    links: [
      {
        id: 1,
        name: "GitHub",
        url: "https://github.com/bishal158/Food-Monkey",
      },
      {
        id: 1,
        name: "Live",
        url: "https://food-monkey.vercel.app/",
      },
    ],
    technologies: food_monkey_technologies,
  },
  {
    id: "project_3",
    no: "Project 3",
    name: "Web Talk",
    description:
      "A Full-Stack Blogging Application Built with MERN Stack.This is a fully functional blogging website built using the MERN Stack. It allows users to create their own accounts, write and edit blogs, and read blogs written by other users. The website is designed to be user-friendly and easy to navigate.",
    screenshots: web_talk_images,
    links: [
      {
        id: 1,
        name: "GitHub",
        url: "https://github.com/bishal158/WebTalk",
      },
      {
        id: 1,
        name: "Live",
        url: "https://web-talk-three.vercel.app/",
      },
    ],

    technologies: web_talk_technologies,
  },
];
export const Projects = () => {
  const { scrollYProgress } = useScroll({
    target: "ref",
    offset: ["0 1", "1.33 1"],
  });
  const ref = useRef(null);
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
        <div className={"all_projects"}>
          <h2>
            All<span> Projects</span>
            <span className={"details_text"}>Details</span>
          </h2>
        </div>
        <div className={"container"}>
          {projects.map((project, index) => (
            <div
              className={"project_details_container"}
              id={project.id}
              key={index}
            >
              <h1>{project.no}</h1>
              <Swiper
                loop={true}
                navigation={true}
                modules={[Navigation, Thumbs, Autoplay]}
                grabCursor={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
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
              <div className={"details_box"}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <h2>Technology Used</h2>
                <div className={"technologies"}>
                  <ul>
                    {project.technologies.map((technology) => (
                      <li key={technology.id}>
                        <img src={technology.icon} alt={"sss"} />
                        <p>{technology.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <h2>Useful Links</h2>
                <div className={"useful_links"}>
                  {project.links.map((link) => (
                    <a href={link.url} target={"_blank"} key={link.name}>
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
