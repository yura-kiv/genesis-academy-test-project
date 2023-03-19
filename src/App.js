import CoursesMainPage from "./pages/CoursesMainPage";
import "./styles/index.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LessonsPage from "./pages/LessonsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/courses"
            element={<CoursesMainPage />}
          />
          <Route
            path="/*"
            element={<Navigate to="/courses" />}
            exact
          />
          <Route
            exact
            path="/courses/lessons/:id"
            element={<LessonsPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
