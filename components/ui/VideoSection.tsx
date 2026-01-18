'use client'

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const videos = [
  { src: '/videos/inspire-3rd-place.webm', title: 'Inspire Award', alt: 'Ingenuity winning 3rd place Inspire' },
  { src: '/videos/featured2.mp4', title: 'Autonomous Mode', alt: 'Video of the robot in autonomous mode' },
  { src: '/videos/featured1.mp4', title: 'Robot Driving', alt: 'Video of the robot driving' }
];

export default function VideoSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Featured Videos</h2>
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={() => setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)}
            className="p-3 hover:bg-gray-800 rounded-lg transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Previous video"
          >
            <ChevronRight className="rotate-180 text-white" size={28} />
          </button>
          <div className="relative w-full max-w-[950px] aspect-video flex justify-center items-center">
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
          <button
            onClick={() => setCurrentVideoIndex((prev) => (prev + 1) % videos.length)}
            className="p-3 hover:bg-gray-800 rounded-lg transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Next video"
          >
            <ChevronRight className="text-white" size={28} />
          </button>
        </div>
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
