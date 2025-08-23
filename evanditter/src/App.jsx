import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./ui_components/AppLayout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import TutoringPage from "./pages/TutoringPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import ResumePage from "./pages/ResumePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<AppLayout />}
        >
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route
            path="projects/:slug"
            element={<ProjectDetailPage />}
          />
          <Route path="courses" element={<CoursesPage />} />
          <Route
            path="courses/:slug"
            element={<CourseDetailPage />}
          />
          <Route path="tutoring" element={<TutoringPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
