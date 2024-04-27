import "./styles/Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const educations = [
  {
    programme_name: "BSC in CSE",
    timeline: {
      start: "2020",
      end: "2024",
    },
    institution: "Green University of Bangladesh",
    location: {
      city: "Dhaka",
      country: "Bangladesh",
      address: "",
    },
    result: {
      point: "3.26",
      out_of: "4.00",
    },
    description:
      "Green University of Bangladesh (GUB), one of the leading private universities in Bangladesh, was founded in 2003 under the Private University Act 1992 with a vision to create a global higher education center of excellence.",
  },
  {
    programme_name: "Higher Secondary School Certificate",
    timeline: {
      start: "2017",
      end: "2019",
    },
    institution: "Royal Media College",
    location: {
      city: "Mymensingh",
      country: "Bangladesh",
      address: "",
    },
    result: {
      point: "4.00",
      out_of: "5.00",
    },
    description:
      "Royal Media College is an intermediate college in Mymensingh, Bangladesh.It is situated at 18 Gangadas Guha Road, Mymensingh, between the Male and Female Teachers' Training Colleges.",
  },
  {
    programme_name: "Secondary School Certificate",
    timeline: {
      start: "2015",
      end: "2017",
    },
    institution: "Mukul Niketon High School",
    location: {
      city: "Mymensingh",
      country: "Bangladesh",
      address: "",
    },
    result: {
      point: "4.95",
      out_of: "5.00",
    },
    description:
      "Mukul Niketon High School is a private school in Mymensingh District, Bangladesh.The school is located at 10, Moharaza Road which is few minutes walk from Mymensingh Rail Station.",
  },
];

export const Education = () => {
  return (
    <>
      <div className={"container mb-3 p-1"} id={"experience"}>
        <div className={"my_education_title"}>
          <h2>
            My<span> Education</span>
            <span className={"education_text"}>Qualification</span>
          </h2>
        </div>
        <div className={"education"}>
          {educations.map((education, index) => (
            <div className={"education_item"} key={index}>
              <p>
                <span>
                  <FontAwesomeIcon icon="fa-solid fa-graduation-cap" />
                </span>
                <time>
                  {education.timeline.start} - {education.timeline.end}
                </time>
              </p>
              <div className={"education_info"}>
                <h3>{education.programme_name}</h3>
                <h2>{education.institution}</h2>
                <p>{education.description}</p>
                <h6>
                  Result: {education.result.point} out of{" "}
                  {education.result.out_of}
                </h6>
                <address>
                  <span>Location: </span>
                  {education.location.city},{education.location.country}
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
