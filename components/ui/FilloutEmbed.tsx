"use client";

import { useEffect, useRef } from "react";

export default function FilloutEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    containerRef.current?.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div
        style={{ width: "100%", height: "500px" }}
        data-fillout-id="29BkZbNrCVus"
        data-fillout-embed-type="standard"
        data-fillout-inherit-parameters
        data-fillout-dynamic-resize
      />
    </div>
  );
}
