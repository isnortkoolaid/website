/**
 * GallerySection -- client component.
 * 'use client' is required because the component uses useState to
 * manage the pause/play toggle for the marquee animation.
 */
'use client'

import { useState } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function GallerySection() {
  // Controls whether the marquee is currently animating.
  // When true the marquee stops scrolling; when false it plays.
  const [paused, setPaused] = useState(false);

  return (
    // Labeled region so screen readers can identify this as the
    // photo gallery landmark (WCAG landmark requirement).
    <section className="py-8 bg-black" aria-label="Team photo gallery" role="region">
      
      {/* react-fast-marquee -- the `play` prop is driven by the
          paused state so the user can stop/start the animation. */}
      <Marquee play={!paused} autoFill={true}>
        {/* Each Image is lazy-loaded for performance. The inline style
            sets explicit width/height to prevent Cumulative Layout Shift
            (CLS) while the image loads. Dimensions are fixed at 400x225. */}
        <Image
          src="/images/compressed-untitled4.jpg"
          alt="Team Ingenuity as of 2025"
          width={400}
          height={225}
          className="mx-4 rounded-lg object-cover"
          loading="lazy"
          quality={75}
          style={{ width: 400, height: 225 }}
        />
        <Image
          src="/images/compressed-untitled2.jpg"
          alt="Robot build in progress"
          width={400}
          height={225}
          className="mx-4 rounded-lg object-cover"
          loading="lazy"
          quality={75}
          style={{ width: 400, height: 225 }}
        />
        <Image
          src="/images/compressed-Image_20251004_202757_942.jpg"
          alt="Team Ingenuity fundraising during China Day 2025"
          width={400}
          height={225}
          className="mx-4 rounded-lg object-cover"
          loading="lazy"
          quality={75}
          style={{ width: 400, height: 225 }}
        />
        <Image
          src="/images/image-3.png"
          alt="Team Ingenuity's Meeting with Dr. Peilin Song"
          width={400}
          height={225}
          className="mx-4 rounded-lg object-cover"
          loading="lazy"
          quality={75}
          style={{ width: 400, height: 225 }}
        />
      </Marquee>
      <div className="container mx-auto px-4 flex justify-center mb-2">
        {/* Pause / Play button -- gives users control over the
            auto-moving marquee content, satisfying WCAG 2.2.2
            (Pause, Stop, Hide). The aria-label updates to reflect
            the current action the button will perform. */}
        <button
          onClick={() => setPaused(!paused)}
          className="text-gray-400 hover:text-white transition-colors text-sm px-3 py-1.5 rounded  focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:outline-none my-4"
          aria-label={paused ? "Play gallery slideshow" : "Pause gallery slideshow"}
        >
          {paused ?
          <svg role="img" width="40" height="40" fill="currentColor" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <title>Play</title>
            <g transform="translate(200, 200), scale(.6, .6)">
              <path d="M870.2 466.333333l-618.666667-373.28a53.333333 53.333333 0 0 0-80.866666 45.666667v746.56a53.206667 53.206667 0 0 0 80.886666 45.666667l618.666667-373.28a53.333333 53.333333 0 0 0 0-91.333334z" />
            </g>
          </svg>
           :
          <svg role="img" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <title>Pause</title>
            <path fill="none" d="M0 0h24v24H0z"></path> <path d="M15 7a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V7zM7 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0V7z"></path>
          </svg>
          }
        </button>
      </div>
    </section>
  );
}
