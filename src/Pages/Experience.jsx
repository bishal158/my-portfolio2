import "./styles/Experience.css";
const experiences = [
  {
    position: "Industrial Training",
    field: "Frontend Developer",
    company_name: "Nexttech Ltd",
    time_line: {
      start: "2015",
      end: "2015",
    },
    location: {
      city: "London",
      country: "United Kingdom",
      address: "12/A",
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
          {/*<span>*/}
          {/*  <FontAwesomeIcon icon="fa-solid fa-briefcase" />*/}
          {/*</span>*/}
          {experiences.map((experience, index) => (
            <div className={"experience_item"} key={index}></div>
          ))}
        </div>
      </div>
    </>
  );
};
