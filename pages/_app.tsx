import type { AppProps } from "next/app";
import "../styles/global.css";
import AnimatedCursor from "react-animated-cursor";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [screenWidth, setScreenWidth] = useState<number>(0);
  useEffect(() => {
      setScreenWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);
  return (
    <>
      {screenWidth > 770 ? (
        <AnimatedCursor
          innerSize={8}
          outerSize={40}
          innerScale={0}
          outerScale={3}
          outerStyle={{
            mixBlendMode: "difference",
            backgroundColor: "white",
          }}
          innerStyle={{
            backgroundColor: "white",
            mixBlendMode: "difference",
          }}
        />
      ) : null}

      <Component {...pageProps} />
    </>
  );
}
