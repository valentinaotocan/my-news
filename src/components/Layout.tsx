import { Outlet, useLocation } from "react-router-dom";
import Search from "./Search";
import Navbar from "./Navbar";
import Modal from "./Modal";

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && <Modal />}
      <div className="app-padding">
        <Search />
        <div className="flex pt-small">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default Layout;
