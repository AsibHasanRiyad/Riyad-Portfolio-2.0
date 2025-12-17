import { Outlet } from "react-router-dom";
import { MainNavbar } from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import { useState } from "react";
import Preloader from "./components/Preloader";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };
  return (
    <div className="bg-black  ">
      <Preloader onComplete={handlePreloaderComplete} />
      <SmoothScrollProvider>
        <MainNavbar />
        <Outlet />
        <Footer />
      </SmoothScrollProvider>
    </div>
  );
};

export default Layout;
