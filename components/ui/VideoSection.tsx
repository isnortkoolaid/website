/**
 * VideoSection -- client component.
 * 'use client' is required because the component uses useState to
 * track which video in the carousel is currently displayed.
 */
'use client'

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

/**
 * Array of video sources for the carousel.
 * Each entry includes:
 *   src   - path to the .mp4 file (relative to /public).
 *   title - short title shown as the native tooltip (title attribute).
 *   alt   - descriptive text used as aria-label for screen readers.
 */
const videos = [
  { src: '/videos/inspire-3rd-place.mp4', title: 'Inspire Award', alt: 'Ingenuity winning 3rd place Inspire' },
  { src: '/videos/match1.mp4', title: 'Match 1', alt: 'League match 1 footage' },
  { src: '/videos/match2.mp4', title: 'Match 2', alt: 'League match 2 footage' },
  { src: '/videos/featured2.mp4', title: 'Autonomous Mode', alt: 'Video of the robot in autonomous mode' },
  { src: '/videos/featured1.mp4', title: 'Robot Driving', alt: 'Video of the robot driving' }
];

export default function VideoSection() {
  // Tracks which video is currently visible in the carousel (0-based index).
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Featured Videos</h2>
        <div className="flex justify-center items-center gap-4">
          {/* Previous button -- wraps around to the last video using
              modulo arithmetic. min-w/min-h of 48px satisfies the
              WCAG 2.5.8 minimum target size requirement.
              The ChevronRight icon is rotated 180 degrees to point left
              and is aria-hidden since the button already has an aria-label. */}
          <button
            onClick={() => setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)}
            className="p-3 hover:bg-gray-800 rounded-lg transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Previous video"
          >
            <ChevronRight aria-hidden="true" focusable="false" className="rotate-180 text-white" size={28} />
          </button>
          <div className="relative w-full max-w-[950px] aspect-video flex justify-center items-center">
            {/* The video element uses native browser controls.
                The `key` prop is set to currentVideoIndex so React
                fully re-mounts the element when the index changes,
                which resets playback to the beginning of the new video.
                `title` and `aria-label` provide context for screen readers. */}
            <video 
              className="w-full h-full rounded-lg shadow-lg object-cover logo-gradient"
              controls
              key={currentVideoIndex}
              title={videos[currentVideoIndex].title}
              aria-label={videos[currentVideoIndex].alt}
            >
              <source src={videos[currentVideoIndex].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Next button -- wraps around to the first video using modulo.
              Same 48px touch-target sizing as the previous button.
              The ChevronRight icon is decorative (aria-hidden). */}
          <button
            onClick={() => setCurrentVideoIndex((prev) => (prev + 1) % videos.length)}
            className="p-3 hover:bg-gray-800 rounded-lg transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Next video"
          >
            <ChevronRight aria-hidden="true" focusable="false" className="text-white" size={28} />
          </button>
        </div>
        {/* Dot indicators -- visual representation of the current video
            position within the carousel. Each dot is a button with an
            aria-label (e.g. "Go to video 3") so screen reader users can
            jump directly to a specific video. The active dot is wider
            and highlighted in orange. */}
        <div className="flex justify-center gap-2 mt-4">
          {videos.map((_, index) => (
            <button
                              key={index}
                              onClick={() => setCurrentVideoIndex(index)}
                              className={`min-h-[48px] min-w-[48px] flex items-center justify-center rounded-lg transition-all`}
                              aria-label={`Go to video ${index + 1}`}
                            >
                              <span className={`h-2 rounded-full transition-all ${
                                index === currentVideoIndex ? 'bg-orange-500 w-8' : 'bg-orange-900/50 w-2 hover:bg-orange-900'
                              }`} />
                            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
