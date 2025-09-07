import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "@/pages/Home";
import AboutPage from "@/pages/About";
import NotFoundPages from "./pages/NotFoundPages";
import Blog from "./pages/blog/Blog";
import BlogDetails from "./pages/blog/BlogDetails";

import BlogRootLayout from "./pages/blog/BlogRootLayout";
import ProductRootLayout from "./pages/product/ProductRootLayout";

import ProductDetails from "./pages/product/ProductDetails";
import Product from "@/pages/product/Product";

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
      {
        path: "products",
        Component: ProductRootLayout,
        children: [
          { index: true, Component: Product },
          { path: ":productId", Component: ProductDetails },
        ],
      },
    ],
  },
]);
