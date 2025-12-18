import { Outlet } from "react-router-dom";
import { MainNavbar } from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import Preloader from "./components/Preloader";
import { Toaster } from "sonner";

const Layout = () => {
  return (
    <div className="bg-black  ">
      <Toaster richColors position="top-right" />
      <Preloader />
      <SmoothScrollProvider>
        <MainNavbar />
        <Outlet />
        <Footer />
      </SmoothScrollProvider>
    </div>
  );
};

export default Layout;
