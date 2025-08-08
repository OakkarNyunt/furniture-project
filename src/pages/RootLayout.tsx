import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <div className="w-full min-h-screen ">
        <Header />
        <Outlet />
        <footer>Footer</footer>
      </div>
    </>
  );
}

export default RootLayout;
