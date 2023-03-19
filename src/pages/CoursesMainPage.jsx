import React, { useState, useEffect } from "react";
import { useFetching } from "../hooks/useFetching";
import CoursesService from "../API/CoursesService";
import CoursesTable from "../components/CoursesTable";
import MyPagination from "../components/UI/pagination/MyPagination";
import { getPagesCount } from "../components/UI/pagination/pages";
import MyLoader from "../components/UI/myLoader/MyLoader.jsx";

function CoursesMainPage() {
  const [courses, setCourses] = useState([]);
  const [paginationCourses, setPaginationCourses] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postErr] = useFetching(async () => {
    const response = await CoursesService.getAll();
    setCourses(response.data.courses);
  });

  const changePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    setTotalPages(getPagesCount(courses.length, limit));
    if (page != totalPages)
      setPaginationCourses(courses.slice(limit * page - limit, limit * page));
    else
      setPaginationCourses(
        courses.slice(limit * page - limit, courses.length - 1)
      );
  }, [courses, page]);

  return (
    <div>
      <CoursesTable courses={paginationCourses} />
      {isPostsLoading && (
        <div className="loader-page">
          <MyLoader />
        </div>
      )}
      <MyPagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default CoursesMainPage;
