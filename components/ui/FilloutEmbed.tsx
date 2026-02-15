// 'use client' is required because this component uses useEffect and useRef
// to dynamically inject a third-party script into the DOM.
"use client";

import { useEffect, useRef } from "react";

export default function FilloutEmbed() {
  // Reference to the wrapper div where the Fillout embed script is appended.
  const containerRef = useRef<HTMLDivElement>(null);

  // On mount, dynamically create and append the Fillout embed script.
  // Cleanup removes the script on unmount to prevent memory leaks.
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
    // Outer wrapper holds both the injected script and the embed target div.
    <div ref={containerRef}>
      {/* Inner div: Fillout reads these data attributes to initialize the form.
          - data-fillout-id: the unique form ID
          - data-fillout-embed-type="standard": renders inline (not as a popup)
          - data-fillout-inherit-parameters: passes URL query params to the form
          - data-fillout-dynamic-resize: adjusts iframe height to fit form content
          The inline height of 500px is a fallback before dynamic resize activates. */}
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
