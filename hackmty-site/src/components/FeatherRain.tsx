import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import FeatherIcon from "../assets/feather.svg?react";
import { useLocation } from "react-router-dom";

const NUM_FEATHERS = 10;

type FeatherData = {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
  rotation: number;
  swayDuration: number; 
};

const generateFeather = (id: number): FeatherData => ({
  id,
  left: Math.random() * 100,
  duration: 20 + Math.random() * 10,
  delay: Math.random() * 10,
  size: 100 + Math.random() * 50,
  rotation: Math.random() * 360,
  swayDuration: 6 + Math.random() * 4,
});

const getFallDistance = () => {
  const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  return `${docHeight}px`;
};

let featherId = 0;

function FeatherRain() {
  const [feathers, setFeathers] = useState<FeatherData[]>([]);
  const [docHeightPx, setDocHeightPx] = useState(100); // fallback default px height
  const location = useLocation(); // hook to get current route

  useEffect(() => {
    const updateDocHeight = () => {
        const container = document.getElementById("feather-container");
        if (!container) return;

        container.style.display = "none";  // Hide container to exclude it from scrollHeight
        const scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        container.style.display = ""; // Restore visibility

        setDocHeightPx(Math.max(scrollHeight, window.innerHeight));
      };

      updateDocHeight();
      window.addEventListener("resize", updateDocHeight);
      return () => window.removeEventListener("resize", updateDocHeight);
    }, []
  );

  useEffect(() => {
    const updateDocHeight = () => {
        const container = document.getElementById("feather-container");
        if (!container) return;

        container.style.display = "none";  // Hide container to exclude it from scrollHeight
        const scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        container.style.display = ""; // Restore visibility

        setDocHeightPx(Math.max(scrollHeight, window.innerHeight));
      };

      updateDocHeight();
      setFeathers([]);
    }, [location]
  ); // on subpage change


  useEffect(() => {
    const addFeather = () => {
      setFeathers((prev) => {
        if (prev.length >= NUM_FEATHERS) return prev; // cap reached
        const newFeather = generateFeather(featherId++);

        setTimeout(() => {
          setFeathers((current) => current.filter((f) => f.id !== newFeather.id));
        }, (newFeather.duration + newFeather.delay) * 1000);
        return [...prev, newFeather];
      });
    };

    const interval = setInterval(addFeather, 1000); // spawn one at a time
    return () => clearInterval(interval);
  }, []);
  const fallDistance = `${docHeightPx}px`;

  return createPortal(
  <div id="feather-container" style={{...styles.container, height: docHeightPx }}>
    {feathers.map((feather) => (
      <div
        key={feather.id}
        style={{
          ...styles.feather,
          left: `${feather.left}%`,
          width: feather.size,
          height: feather.size,
          animation: `fall ${feather.duration}s linear ${feather.delay}s forwards`,
          ["--fall-distance" as any]: fallDistance,
        }}
      >
        <div
          style={{
            transform: `rotate(${feather.rotation}deg)`,
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              animation: `sway ${feather.swayDuration}s ease-in-out ${feather.delay}s infinite alternate`,
            }}
          >
            <FeatherIcon style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </div>
    ))}
  </div>,
  document.body
);
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    pointerEvents: "none",
    overflow: "hidden",
    zIndex: 1,
  },
  feather: {
    position: "absolute",
    top: 0,
    opacity: 0,
  },
};

export default FeatherRain;
