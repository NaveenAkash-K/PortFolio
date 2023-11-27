import type { AppProps } from "next/app";
import "../styles/global.css";
import AnimatedCursor from "react-animated-cursor";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
      <Component {...pageProps} />
    </>
  );
}
