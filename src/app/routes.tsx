import { createBrowserRouter } from "react-router";
import { LoginPage } from "./pages/login-page";
import { DashboardPage } from "./pages/dashboard-page";
import { CourseDetailsPage } from "./pages/course-details-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
  {
    path: "/dashboard",
    Component: DashboardPage,
  },
  {
    path: "/course/:courseId",
    Component: CourseDetailsPage,
  },
]);
