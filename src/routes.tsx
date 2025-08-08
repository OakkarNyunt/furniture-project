import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import NotFoundPages from "./pages/NotFoundPages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <NotFoundPages />, // Error handling for unmatched routes
    children: [
      { index: true, Component: Home },
      { path: "contact", Component: Contact },
    ],
  },
]);
