import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "@/pages/Home";
import AboutPage from "@/pages/About";
import NotFoundPages from "./pages/NotFoundPages";
import Blog from "./pages/blog/Blog";
import BlogDetails from "./pages/blog/BlogDetails";

import BlogRootLayout from "./pages/blog/BlogRootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: NotFoundPages, // Error handling for unmatched routes
    children: [
      { index: true, Component: Home },
      { path: "about", Component: AboutPage },
      {
        path: "blogs",
        Component: BlogRootLayout,
        children: [
          { index: true, Component: Blog },
          { path: ":postId", Component: BlogDetails },
        ],
      },
    ],
  },
]);
