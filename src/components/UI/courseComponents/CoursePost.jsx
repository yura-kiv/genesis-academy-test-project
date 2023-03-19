import React from "react";
import CoursePreImg from "./coursePreImg/CoursePreImg";
import CourseRating from "./courseRating/CourseRating";
import "./CoursePost.scss";
import CourseInfoText from "./courseInfoText/CourseInfoText";
import LinkButtonItem from "../linkButtonItem/LinkButtonItem";

function CoursePost({ course }) {
  return (
    <div className="course-post">
      <CourseRating rating={course.rating} />
      <CoursePreImg course={course} />
      <CourseInfoText
        title={course.title}
        skills={course.meta.skills}
      />
      <LinkButtonItem
        to={"/courses/lessons/" + course.id}
        className="course-post__link"
      >
        Go to course...
      </LinkButtonItem>
    </div>
  );
}

export default CoursePost;
