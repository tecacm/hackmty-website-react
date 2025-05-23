import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToElement() {
  const location = useLocation();

  useEffect(() => {
    const trueHash = window.location.hash.split("#")[2]; // after second #
    if (trueHash) {
      const el = document.getElementById(trueHash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

export default ScrollToElement;
