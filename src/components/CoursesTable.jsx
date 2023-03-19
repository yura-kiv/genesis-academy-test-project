import React from "react";
import CoursePost from "./UI/courseComponents/CoursePost";

function CoursesTable({ courses }) {
  return (
    <div className="courses-table">
      {courses.map((course) => {
        return (
          <CoursePost
            key={course.id}
            course={course}
          />
        );
      })}
    </div>
  );
}

export default CoursesTable;
