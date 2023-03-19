import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import CoursesService from "../API/CoursesService";
import MyLoader from "../components/UI/myLoader/MyLoader";
import LessonComponent from "../components/UI/lessonComponent/LessonComponent";

function LessonsPage() {
  const { id } = useParams();

  const [course, setCourse] = useState([]);
  const [lessons, setLessons] = useState([]);

  const [fetchPosts, isPostsLoading, postErr] = useFetching(async () => {
    const response = await CoursesService.getById(id);
    console.log();
    setCourse(response.data);
    setLessons(response.data.lessons);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="lessons_page">
      {isPostsLoading && (
        <div className="loader-page">
          <MyLoader />
        </div>
      )}
      <h1>Course: {course.title}</h1>
      <img
        src={course.previewImageLink + "/cover.webp"}
        alt="course"
      />
      {lessons?.map((lesson, index) => {
        return (
          <LessonComponent
            lesson={lesson}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default LessonsPage;
