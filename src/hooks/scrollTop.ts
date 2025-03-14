import { useEffect } from "react";
import { useLocation } from "react-router";

const UseScrollToTop = () => {
  const location = useLocation(); // ✅ Get current route

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]); // ✅ React to route changes
  return null;
};

export default UseScrollToTop;
