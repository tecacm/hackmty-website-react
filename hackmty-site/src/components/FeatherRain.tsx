// FeatherRain.tsx
import React, { useEffect, useState } from "react";
import FeatherIcon from "../assets/feather.svg?react"; // your imported SVG as React component

const NUM_FEATHERS = 10;

type FeatherData = {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
  rotation: number;
};

const generateFeather = (id: number): FeatherData => ({
  id,
  left: Math.random() * 100,
  duration: 20 + Math.random() * 50,
  delay: Math.random() * 20,
  size: 120 + Math.random() * 50,
  rotation: Math.random() * 360,
});

function FeatherRain() {
  const [feathers, setFeathers] = useState<FeatherData[]>([]);

  useEffect(() => {
    setFeathers(Array.from({ length: NUM_FEATHERS }, (_, i) => generateFeather(i)));
    const interval = setInterval(() => {
      setFeathers(Array.from({ length: NUM_FEATHERS }, (_, i) => generateFeather(i)));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      {feathers.map((feather) => (
        <div
          key={feather.id}
          style={{
            ...styles.feather,
            left: `${feather.left}%`,
            width: feather.size,
            height: feather.size,
            animationDuration: `${feather.duration}s`,
            animationDelay: `${feather.delay}s`,
            animation: `
            fall ${feather.duration}s linear ${feather.delay}s infinite
            `,
            transform: `rotate(${feather.rotation}deg)`,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              animation: `sway ${6 + Math.random() * 4}s ease-in-out ${feather.delay}s infinite alternate`,
            }}
          >
            <FeatherIcon style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      ))}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "absolute",
    top: 100,
    left: 0,
    width: "100vw",
    height: "500vh",
    pointerEvents: "none",
    overflow: "hidden",
    zIndex: 0,
  },
  feather: {
    position: "absolute",
    top: 0,
    animationName: "fall",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
};

export default FeatherRain;
