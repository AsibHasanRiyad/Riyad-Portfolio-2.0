import { Outlet } from "react-router-dom";
import { MainNavbar } from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import Preloader from "./components/Preloader";
import { Toaster } from "sonner";

const Layout = () => {
  return (
    <div className="bg-black relative  ">
      <div className="absolute bottom-0 left-0 right-0 h-screen top-0 bg-[radial-gradient(#5c545433_1px,#000000_1px)] bg-size-[20px_20px] mask-[radial-gradient(ellipse_105%_90%_at_50%_0%,#000_45%,transparent_120%)]"></div>
      <Toaster richColors position="top-right" />
      {/* <Preloader /> */}
      <SmoothScrollProvider>
        <MainNavbar />
        <Outlet />
        <Footer />
      </SmoothScrollProvider>
    </div>
  );
};

export default Layout;
