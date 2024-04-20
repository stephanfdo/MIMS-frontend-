// NavigationHandler.js
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./layout/Navbar";
import SideNav from "./layout/SideNav";

const NavigationHandler = ({ children }) => {
  const location = useLocation();
  const [hideNavigation, setHideNavigation] = useState(false);

  useEffect(() => {
    // Check if the current route is /auth
    setHideNavigation(location.pathname === "/");
  }, [location]);

  return (
    <div>
      {!hideNavigation && (
        <>
          {/* Render Navbar only if hideNavigation is false */}
          <Navbar />
          {/* Render SideNav only if hideNavigation is false */}
          <SideNav />
        </>
      )}
      {children}
    </div>
  );
};

export default NavigationHandler;
