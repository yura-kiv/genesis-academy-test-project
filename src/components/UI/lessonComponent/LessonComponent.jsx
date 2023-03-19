import React from "react";
import "./LessonComponent.scss";

function LessonComponent({ lesson }) {
  return (
    <div className="lesson-component">
      <h2>
        Lesson {lesson.order} {lesson.status === "locked" ? "🔒" : ""}
      </h2>
      <h3>{lesson.title}</h3>
      <img
        className="lesson-preview-image"
        src={`${lesson?.previewImageLink}/lesson-${lesson.order}.webp`}
        alt="lesson"
      />

      {/* <div>
              {lesson.link ? (
                <VideoPlayer videoSrc={lesson?.link} />
              ) : (
                "Not a video link"
              )}
            </div> */}
    </div>
  );
}

export default LessonComponent;
