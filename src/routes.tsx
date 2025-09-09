import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "@/pages/Home";
import AboutPage from "@/pages/About";
import NotFoundPages from "./pages/NotFoundPages";
import { lazy, Suspense } from "react";
// import Blog from "./pages/blog/Blog";
// import BlogDetails from "./pages/blog/BlogDetails";

// import BlogRootLayout from "./pages/blog/BlogRootLayout";

const Blog = lazy(() => import("./pages/blog/Blog"));
const BlogDetails = lazy(() => import("./pages/blog/BlogDetails"));
const BlogRootLayout = lazy(() => import("./pages/blog/BlogRootLayout"));

const Product = lazy(() => import("./pages/product/Product"));
const ProductDetails = lazy(() => import("./pages/product/ProductDetails"));
const ProductRootLayout = lazy(
  () => import("./pages/product/ProductRootLayout")
);
// lazy loading - don't download the file using lazy loading until the user request it
// suspense - show fallback content while waiting for lazy loading to finish

const supenseFallback = () => <div>Loading...</div>;

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
          {
            index: true,
            element: (
              <Suspense fallback={supenseFallback()}>
                <Blog />
              </Suspense>
            ),
          },
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
