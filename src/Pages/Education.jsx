import "./styles/Education.css";
const educations = [{}];

export const Education = () => {
  return (
    <>
      <div className={"container mb-3"} id={"experience"}>
        <div className={"my_education_title"}>
          <h2>
            My<span> Education</span>
            <span className={"education_text"}>Qualification</span>
          </h2>
        </div>
        <div className={"education"}>
          {/*<span>*/}
          {/*  <FontAwesomeIcon icon="fa-solid fa-briefcase" />*/}
          {/*</span>*/}
          {educations.map((experience, index) => (
            <div className={"education_item"} key={index}></div>
          ))}
        </div>
      </div>
    </>
  );
};
