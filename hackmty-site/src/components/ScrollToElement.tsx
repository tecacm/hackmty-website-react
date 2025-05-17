import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollToElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
}

export default ScrollToElement;
