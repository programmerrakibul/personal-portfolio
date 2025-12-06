import { createBrowserRouter } from "react-router";
import Layout from "../Layout";
import Home from "../Home";
import ProjectDetails from "../ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "project-details/:id",
        element: <ProjectDetails />,
      },
    ],
  },
]);
