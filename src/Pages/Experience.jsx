import "./styles/Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const experiences = [
  {
    position: "Industrial Training",
    field: "Frontend Developer",
    company_name: "Nexttech Ltd",
    time_line: {
      start: "01/12/2023",
      end: "01/01/2024",
    },
    location: {
      city: "Dhaka",
      country: "Bangladesh",
    },
    description:
      "NextTech Limited is a Software Development Company & Training\n" +
      "                Institute for Hardware,Software,Web Development,Networking,\n" +
      "                Graphics Design,Microcontroller,Robotics,PLC,and Outsourcing\n" +
      "                Company in Bangladesh.It has been operative independently since\n" +
      "                2012.",
  },
];
export const Experience = () => {
  return (
    <>
      <div className={"container mb-3"} id={"experience"}>
        <div className={"my_experience_title"}>
          <h2>
            My<span> Timeline</span>
            <span className={"experience_text"}>Experience++</span>
          </h2>
        </div>
        <div className={"experience"}>
          {experiences.map((experience, index) => (
            <div className={"experience_item"} key={index}>
              <p>
                <span>
                  <FontAwesomeIcon icon="fa-solid fa-briefcase" />
                </span>
                <time>
                  {experience.time_line.start} - {experience.time_line.end}
                </time>
              </p>
              <div className={"experience_info"}>
                <h3>{experience.position}</h3>
                <h2>
                  {experience.field} - <span>{experience.company_name}</span>
                </h2>
                <p>{experience.description}</p>
                <address>
                  <span>Location: </span>
                  {experience.location.city},{experience.location.country}
                </address>
              </div>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </>
  );
};
