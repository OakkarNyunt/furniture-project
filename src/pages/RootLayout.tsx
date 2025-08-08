import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <>RootLayout</>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}

export default RootLayout;
