import { Outlet } from "react-router-dom";
import Navbar from "../compontents/common/Navbar";
import Footer from "../compontents/common/Footer";

const Layout = () => {
  return (
    <div className="font-tajawal font-medium">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
