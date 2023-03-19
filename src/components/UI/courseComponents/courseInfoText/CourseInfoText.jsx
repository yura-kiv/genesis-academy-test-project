import React from "react";
import "./CourseInfoText.scss";

function CourseInfoText({ title, skills }) {
  return (
    <div className="course-info-text">
      <h2>{title}</h2>
      {!skills ? <></> : <span>Skills:</span>}
      {!skills ? (
        <></>
      ) : (
        <ul>
          {skills.map((skill) => {
            return <li key={skill}>{"- " + skill}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default CourseInfoText;
