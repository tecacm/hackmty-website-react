import React, { useEffect, useState } from "react";

// ─── Keyframes ───────────────────────────────────────────────────────────────

const CSS_KEYFRAMES = `
@keyframes cloudFloat0 {
  0%   { transform: translateX(-100px); }
  100% { transform: translateX(5px); }
}
@keyframes cloudFloat1 {
  0%   { transform: translateX(100px); }
  100% { transform: translateX(-5px); }
}
@keyframes cloudFloat2 {
  0%   { transform: translateY(-15px); }
  100% { transform: translateY(90px); }
}
`;

// ─── Responsive hook ─────────────────────────────────────────────────────────

function useIsMobile(breakpoint = 900): boolean {
  const query = `(max-width: ${breakpoint}px)`;
  const [matches, setMatches] = useState<boolean>(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

// ─── Inlined SVG assets ───────────────────────────────────────────────────────

function CerroSvg({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      width="4000.196"
      height="837.70972"
      viewBox="0 0 4000.1961 837.70972"
      fill="none"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={{ fill: "#b486e0", fillOpacity: 1, fillRule: "nonzero", stroke: "none", strokeWidth: 0.787116 }}
        d="m 1800.3283,34.723801 c -1.4212,-0.3238 -2.934,-0.2851 -4.4903,0.029 -10.3758,2.0929 -22.6894,16.3769 -22.6894,16.3769 C 1697.2677,125.5266 1533.8283,208.7528 1533.8283,208.7528 1407.98,236.7636 1294.5845,146.009 1187.0978,90.221501 1135.7334,58.697401 1001.4728,130.5712 1001.4728,130.5712 972.2877,153.2685 804.4285,95.437001 804.4285,95.437001 753.063,89.132401 546.39,357.5477 546.39,357.5477 541.8734,361.4879 0,842.981 0,842.981 c 0,0 397.6295,-7.5629 391.7653,-5.4411 h 429.9594 1797.0782 l 1073.34,-0.46094 C 3681.6321,828.63449 3614.4612,693.91997 3400.6139,548.17503 3277.6025,464.33819 3135.271,361.8372 2985.1559,348.97954 2872.93,339.36716 2701.8982,282.56041 2701.8982,282.56041 2640.0212,256.08001 2484.129,231.4442 2484.129,231.4442 c -16.0642,6.1976 -78.1132,-27.5393 -115.582,-49.1719 -53.3224,-0.87432 -8.9202,29.3112 -137.7598,-41.6113 -26.8485,-26.4804 -80.5527,34.043 -80.5527,34.043 -47.866,18.9139 -121.414,-63.0469 -121.4141,-63.0469 -30.052,-23.165999 -24.5704,-59.287899 -70.0488,-37.830099 -28.0315,44.455399 -40.6298,135.775899 -118.3687,75.467999 -34.9345,-25.7006 -31.0571,-99.424999 -31.0571,-99.424999 -1.3143,-9.9306 -4.7537,-14.1749 -9.0175,-15.1465 z"
      />
    </svg>
  );
}

function SunSvg({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      width="800"
      height="800"
      viewBox="0 0 1024 1024"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="512"
        cy="512"
        r="256"
        style={{ fill: "#ceaeee", fillOpacity: 1 }}
      />
    </svg>
  );
}

function CloudASvg({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 135.18929 30.695786"
      height="30.695786"
      width="135.18929"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={{ fill: "#e2beff", fillOpacity: 1 }}
        d="m 0.19906977,29.828275 c -1.45675397,-3.83155 5.34754503,-7.60591 11.73179423,-6.50764 1.21763,0.20946 2.645873,0.56255 3.173873,0.78463 0.882965,0.37138 1.14983,0.30406 3.32564,-0.83888 2.167293,-1.13847 2.373821,-1.33383 2.463214,-2.33006 0.05367,-0.59807 0.313773,-1.50548 0.578014,-2.01647 1.532222,-2.96299 7.099748,-5.50407 12.059465,-5.50407 h 2.13187 l 0.214562,-1.3418 c 0.316418,-1.97877 1.694587,-4.2693102 3.636749,-6.0443302 2.070968,-1.89275 6.615051,-4.183352 10.150486,-5.11670501 3.298364,-0.870766 10.905764,-1.200277 14.48219,-0.62729 6.743698,1.08042301 12.80365,4.11990501 15.24887,7.64836501 l 0.84884,1.22488 2.56555,0.0488 c 3.22275,0.0612 6.06179,0.76493 8.48763,2.1037402 1.99929,1.10341 3.88313,3.20541 4.17338,4.6567 0.14985,0.74924 0.46486,0.94283 2.51624,1.54635 l 2.344943,0.68989 1.75905,-0.80531 c 5.03469,-2.30496 12.1166,-2.2859 17.04558,0.0459 2.19451,1.03817 4.47477,3.20837 4.83606,4.60265 0.25477,0.98317 0.29549,1.00137 2.53759,1.1341 5.37486,0.31818 9.22015,3.16941 8.61619,6.38879 l -0.21111,1.12527 H 67.722317 0.52889577 Z"
      />
    </svg>
  );
}

function CloudBSvg({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 117.38021 22.987417"
      height="22.987417"
      width="117.38021"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={{ fill: "#e2beff", fillOpacity: 1 }}
        d="m 117.21927,22.481287 c 0.89909,-2.34297 -2.05313,-4.57705 -6.75064,-5.10851 -1.29717,-0.14676 -2.7779,-0.0447 -4.60367,0.31736 l -2.69145,0.5337 -1.78022,-0.78771 c -1.560908,-0.69068 -1.827488,-0.94551 -2.163948,-2.06852 -0.86975,-2.90295 -4.60097,-4.77821 -10.62715,-5.34105 l -2.09133,-0.1953297 -0.54835,-1.54391 c -1.82402,-5.13564 -11.38447,-8.82539997 -21.30608,-8.22285997 -6.67143,0.40516 -12.4067,2.37517997 -15.44746,5.30607997 l -1.5905,1.53304 -3.10248,0.16208 c -4.80479,0.251 -9.09968,2.26895 -9.79478,4.6020597 -0.26464,0.88826 -0.49743,1.03034 -2.45988,1.50133 -2.06199,0.49488 -2.23482,0.49078 -3.5477,-0.0842 -3.46552,-1.5176 -9.61345,-1.68473 -13.73322,-0.37333 -2.16901,0.69044 -4.86412,2.66986 -5.2376701,3.84681 -0.1484,0.46757 -0.65507,0.63427 -2.47195,0.8133 -4.99691,0.49238 -8.03593999,2.67853 -7.10303999,5.10962 0.17613,0.459 5.63022999,0.50617 58.52576009,0.50617 52.895528,0 58.349628,-0.0472 58.525758,-0.50617 z"
      />
    </svg>
  );
}

function CloudBottomSvg({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 288.14969 58.720001"
      height="58.720001"
      width="288.14969"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={{ fill: "#e2beff", fillOpacity: 1 }}
        d="m 0.05586616,57.84 c -0.0956,-0.484 -0.06544,-1.456 0.06703,-2.16 C 1.5478122,48.10755 12.693979,44.69035 19.978697,49.59261 l 1.638178,1.10241 1.468129,-1.12065 c 1.707821,-1.30361 3.007044,-1.89377 4.857273,-2.20636 1.116363,-0.18861 1.327408,-0.34383 1.327408,-0.97628 0,-1.4731 1.023921,-5.13171 2.055397,-7.34421 2.184299,-4.6853 5.846822,-8.39024 10.584603,-10.70717 6.788123,-3.31962 15.237176,-2.94781 21.708644,0.95531 l 2.182827,1.31653 1.75422,-1.93848 c 2.451106,-2.70856 5.569618,-4.24486 9.022284,-4.44473 l 2.48847,-0.14406 0.54946,-1.54704 c 1.000365,-2.81659 3.32053,-4.83934 6.96064,-6.06839 1.7028,-0.57493 2.5999,-0.67278 5.25346,-0.57301 2.75912,0.10375 3.48866,0.25596 5.29516,1.10477 2.73724,1.28613 4.24588,2.64743 5.28284,4.76688 0.82822,1.69282 1.09866,4.09003 0.62854,5.57128 -0.1725,0.54348 -0.0786,0.57262 1.02175,0.31716 1.89935,-0.44094 5.85378,-0.34436 7.91841,0.19341 2.51919,0.65617 5.37988,2.22024 7.07625,3.86894 l 1.38987,1.3508 0.64942,-1.73574 c 1.63872,-4.37986 3.62227,-7.57548 6.68182,-10.76486 4.00634,-4.17635 8.33357,-6.27789 13.49593,-6.55438 5.10399,-0.27336 9.30488,1.16553 13.66842,4.68171 l 1.91338,1.54183 1.66947,-2.52415 C 161.22841,13.62058 164.86477,11.36 168.74219,11.36 h 1.86565 l 0.37682,-1.68 c 0.80183,-3.57479 3.52211,-6.98635 6.95653,-8.72433 C 179.68076,0.07536 180.09463,0 183.18968,0 c 3.06881,0 3.5264,0.0815 5.28,0.94034 5.49831,2.69286 8.59589,9.3623 6.9797,15.02807 -0.13996,0.49064 -0.058,0.56274 0.42337,0.37247 0.32831,-0.12976 1.4713,-0.37481 2.53998,-0.54456 5.57289,-0.88521 11.83759,2.35497 15.1196,7.82005 2.51466,4.1873 3.5069,9.817 2.53855,14.40301 l -0.46018,2.17938 1.46949,1.00408 c 2.49037,1.70164 4.54142,3.37939 7.79248,6.37423 l 3.12299,2.87686 1.6083,-1.446 c 0.88457,-0.7953 2.29188,-1.75494 3.12736,-2.13253 1.41293,-0.63857 1.5461,-0.8021 1.90632,-2.34096 1.08048,-4.61581 4.59982,-9.33088 8.33641,-11.16877 1.94906,-0.95868 2.37923,-1.04567 5.17077,-1.04567 2.8438,0 3.17461,0.0704 5.0098,1.0659 1.08072,0.58624 2.34967,1.46746 2.81988,1.95826 l 0.85494,0.89235 2.04635,-1.37222 c 3.67592,-2.46498 8.44261,-2.79276 12.38547,-0.8517 3.34573,1.64709 6.27613,5.37635 6.84219,8.70741 0.1573,0.92569 0.42071,1.22695 1.51828,1.73645 2.05969,0.95613 5.08409,4.23646 6.41062,6.95309 1.09143,2.23518 2.11734,5.49978 2.11734,6.73769 0,0.54951 -5.84601,0.57277 -143.96,0.57277 H 0.22969016 Z"
      />
    </svg>
  );
}

// ─── MountainBg ───────────────────────────────────────────────────────────────

type MountainBgProps = {
  elementRef?: React.RefObject<HTMLDivElement | null>;
};

function MountainBg({ elementRef }: MountainBgProps) {
  const [carrouselVisible, setMountainVisible] = useState(true);
  const isMobile = useIsMobile();
  const showCerro = elementRef ? !carrouselVisible : true;

  useEffect(() => {
    if (!elementRef?.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setMountainVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [elementRef]);

  const fadeTransition = "opacity 2s ease, transform 1s ease";
  const shownTransform = "translateY(-200px)";
  const hiddenTransform = "translateY(500px)";

  return (
    <>
      <style>{CSS_KEYFRAMES}</style>
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          pointerEvents: "none",
          zIndex: -4,
        }}
      >
        {/* CloudA — bottom left */}
        <div
          style={{
            position: "fixed",
            bottom: isMobile ? 40 : 100,
            left: "-6vw",
            transform: showCerro ? shownTransform : hiddenTransform,
            opacity: showCerro ? 1 : 0,
            transition: fadeTransition,
          }}
        >
          <CloudASvg
            style={{
              width: "clamp(300px, 80vw, 800px)",
              height: "auto",
              animation: "cloudFloat0 8s ease-in-out infinite alternate",
              zIndex: -4,
            }}
          />
        </div>

        {/* CloudB — bottom right */}
        <div
          style={{
            position: "fixed",
            bottom: isMobile ? -90 : -80,
            right: "-20vw",
            transform: showCerro ? shownTransform : hiddenTransform,
            opacity: showCerro ? 1 : 0,
            transition: fadeTransition,
          }}
        >
          <CloudBSvg
            style={{
              animation: "cloudFloat1 8s ease-in-out infinite alternate",
              zIndex: -4,
              width: "clamp(200px, 70vw, 750px)",
              height: "auto",
            }}
          />
        </div>

        {/* Center group: Sun + Cerro + CloudBottom */}
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SunSvg
            style={{
              position: "fixed",
              bottom: isMobile ? -50 : 10,
              transform: showCerro ? "translate(0%, 0) scale(0.6)" : "translate(0%, 500px) scale(0.6)",
              zIndex: -6,
              opacity: showCerro ? 1 : 0,
              transition: fadeTransition,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <CerroSvg
            style={{
              position: "fixed",
              bottom: isMobile ? -280 : -200,
              transform: showCerro ? "translate(3%, 0) scale(0.6)" : "translate(3%, 500px) scale(0.6)",
              zIndex: -5,
              opacity: showCerro ? 1 : 0,
              transition: fadeTransition,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <div
            style={{
              position: "fixed",
              bottom: "-28vh",
              transform: showCerro ? shownTransform : hiddenTransform,
              opacity: showCerro ? 1 : 0,
              transition: fadeTransition,
            }}
          >
            <CloudBottomSvg
              style={{
                zIndex: -4,
                width: "clamp(300px, 100vw, 800px)",
                height: "auto",
                animation: "cloudFloat2 8s ease-in-out infinite alternate",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MountainBg;
