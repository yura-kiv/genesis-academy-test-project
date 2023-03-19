import React from "react";
import classes from "./CourseRating.module.scss";
import { ReactComponent as StarSvg } from "./starRating.svg";

function CourseRating({ rating }) {
  return (
    <div className={classes.course_rating}>
      <StarSvg
        style={{
          display: "inline-block",
          marginRight: "5px",
        }}
      />
      {rating}
    </div>
  );
}

export default CourseRating;
