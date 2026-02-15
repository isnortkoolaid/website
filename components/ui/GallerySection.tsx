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
      <div className="container mx-auto px-4 flex justify-end mb-2">
        {/* Pause / Play button -- gives users control over the
            auto-moving marquee content, satisfying WCAG 2.2.2
            (Pause, Stop, Hide). The aria-label updates to reflect
            the current action the button will perform. */}
        <button
          onClick={() => setPaused(!paused)}
          className="text-gray-400 hover:text-white transition-colors text-sm px-3 py-1.5 rounded border border-gray-700 hover:border-gray-500 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:outline-none"
          aria-label={paused ? "Play gallery slideshow" : "Pause gallery slideshow"}
        >
          {paused ? "▶ Play" : "⏸ Pause"}
        </button>
      </div>
      {/* react-fast-marquee -- the `play` prop is driven by the
          paused state so the user can stop/start the animation. */}
      <Marquee play={!paused}>
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
    </section>
  );
}
